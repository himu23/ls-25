#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "utils.h"

#define MAX_MSG_LEN 4096

int detect_bit(char *addr) {
    int count = 0;
    for (int i = 0; i < 5; i++) {
        uint64_t start = rdtsc();
        *(volatile char*)addr;
        uint64_t delta = rdtsc() - start;

        if (delta < THRESHOLD)
            count++;
        delay_cycles(10);
    }
    return count >= 3 ? 1 : 0;
}

unsigned char read_byte(char *addr) {
    unsigned char byte = 0;
    for (int i = 7; i >= 0; i--) {
        delay_cycles(INTERVAL);
        int bit = detect_bit(addr);
        byte |= (bit << i);
    }
    return byte;
}

int main() {
    void *shared_mem = setup_shared_memory();
    char *addr = (char*)shared_mem + 64;

    // Wait for sync pattern
    while (1) {
        unsigned char byte = read_byte(addr);
        if (byte == SYNC_PATTERN) break;
    }

    char *received_msg = malloc(MAX_MSG_LEN);
    int idx = 0;

    while (idx < MAX_MSG_LEN - 1) {
        unsigned char byte = read_byte(addr);
        if (byte == 0) break;
        received_msg[idx++] = byte;
        putchar(byte);
        fflush(stdout);
    }
    received_msg[idx] = '\0';

    printf("\nAccuracy (%%): %f\n", check_accuracy(received_msg, idx) * 100);
    free(received_msg);
    return 0;
}
