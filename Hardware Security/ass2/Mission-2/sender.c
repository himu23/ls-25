#include <stdio.h>
#include <time.h>
#include "utils.h"

void send_bit(int bit, char *addr) {
    uint64_t start = rdtsc();
    while (rdtsc() - start < INTERVAL) {
        if (bit) {
            *(volatile char *)addr;  // access = cache hit
        }
    }
    clflush(addr);
    delay_cycles(500); // gap between bits
}

void send_byte(unsigned char byte, char *addr) {
    for (int i = 7; i >= 0; i--) {
        int bit = (byte >> i) & 1;
        send_bit(bit, addr);
    }
}

int main() {
    FILE *fp = fopen(MSG_FILE, "r");
    if (fp == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    char msg[MAX_MSG_SIZE];
    int msg_size = 0;
    char c;
    while ((c = fgetc(fp)) != EOF) {
        msg[msg_size++] = c;
    }
    fclose(fp);

    void *shared_mem = setup_shared_memory();
    char *addr = (char*)shared_mem + 64;

    clock_t start = clock();

    // Send sync pattern first
    send_byte(SYNC_PATTERN, addr);

    for (int i = 0; i < msg_size; i++) {
        send_byte((unsigned char)msg[i], addr);
    }

    clock_t end = clock();
    double time_taken = ((double)(end - start)) / CLOCKS_PER_SEC;

    printf("Message sent successfully\n");
    printf("Time taken to send the message: %f\n", time_taken);
    printf("Message size: %d\n", msg_size);
    printf("Bits per second: %f\n", msg_size * 8 / time_taken);
    return 0;
}
