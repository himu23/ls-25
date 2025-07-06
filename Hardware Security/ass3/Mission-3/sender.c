#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

void send_bit(int bit) {
    if (bit == 1) {
        char *buffer = malloc(10 * 1024 * 1024);
        for (int i = 0; i < 1000; i++) {
            for (int j = 0; j < 10 * 1024 * 1024; j += 64) {
                buffer[j]++;
            }
        }
        free(buffer);
    } else {
        usleep(100000);
    }
}

void send_char(char c) {
    for (int i = 7; i >= 0; i--) {
        int bit = (c >> i) & 1;
        send_bit(bit);
        usleep(100000);
    }
}

int main() {
    printf("\033[2J\033[1;1H");
    FILE *fp = fopen("msg.txt", "r");
    if (!fp) {
        perror("msg.txt not found");
        return 1;
    }

    sleep(2);

    char c;
    while ((c = fgetc(fp)) != EOF) {
        send_char(c);
    }
    fclose(fp);
    return 0;
}
