#!/bin/bash

rm -rf temp
mkdir temp
cp chall1.7z temp/
cd temp

current="chall1.7z"
count=0

while true; do
    echo ""
    echo "=============================="
    echo "[*] Step $count: Unpacking $current"

    # Extract enc_pass and archive
    7z x "$current" -y > /dev/null 2>&1 || {
        echo "[!] Failed to extract $current"
        break
    }

    passfile=$(ls | grep -w enc_pass)
    archivefile=$(ls | grep -E '\.zip$|\.7z$' | head -n 1)

    if [ ! -f "$passfile" ] || [ ! -f "$archivefile" ]; then
        echo "[!] Required files not found."
        break
    fi

    passraw=$(cat "$passfile")

    for method in plain base64 base32 hex; do
        echo "  [-] Trying method: $method"

        case $method in
            plain) pass="$passraw" ;;
            base64) pass=$(echo "$passraw" | base64 -d 2>/dev/null) ;;
            base32) pass=$(echo "$passraw" | base32 -d 2>/dev/null) ;;
            hex) pass=$(echo "$passraw" | xxd -r -p 2>/dev/null) ;;
        esac

        outdir="out_$count"
        mkdir "$outdir"

        if [[ "$archivefile" == *.zip ]]; then
            unzip -P "$pass" "$archivefile" -d "$outdir" > /dev/null 2>&1
        else
            7z x "$archivefile" -p"$pass" -o"$outdir" -y > /dev/null 2>&1
        fi

        if [ $? -eq 0 ]; then
            echo "  [+] Success with $method"
            break
        else
            rm -r "$outdir"
        fi
    done

    # Check for flag
    if grep -r 'flag{' "$outdir" 2>/dev/null; then
        echo ""
        echo "[+] Flag found:"
        grep -r 'flag{' "$outdir" | grep -o 'flag{[^}]*}'
        break
    fi

    # Prepare for next step: move into output folder
    cd "$outdir"
    current=$(ls | grep -E '\.zip$|\.7z$' | head -n 1)

    if [ -z "$current" ]; then
        echo "[!] No archive found for next step."
        break
    fi

    ((count++))
done
