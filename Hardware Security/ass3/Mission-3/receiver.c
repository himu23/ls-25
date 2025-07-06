#define _POSIX_C_SOURCE 199309L
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define THRESHOLD 2500

long measure_latency() {
    char *buffer = malloc(10 * 1024 * 1024);
    volatile int sum = 0;

    struct timespec start, end;
    clock_gettime(CLOCK_MONOTONIC, &start);
    for (int i = 0; i < 10 * 1024 * 1024; i += 64) {
        sum += buffer[i];
    }
    clock_gettime(CLOCK_MONOTONIC, &end);

    free(buffer);
    long duration = (end.tv_sec * 1e6 + end.tv_nsec / 1000)
                  - (start.tv_sec * 1e6 + start.tv_nsec / 1000);
    return duration;
}

void receive_char() {
    int ch = 0;
    for (int i = 0; i < 8; i++) {
        usleep(100000);  // sync delay
        long latency = measure_latency();
        int bit = latency > THRESHOLD ? 1 : 0;
        printf("Bit %d: latency = %ld µs, bit = %d\n", i, latency, bit);  // debug
        ch = (ch << 1) | bit;
    }
    printf("Decoded char = %c (%d)\n", ch, ch);
    printf("%c", ch);  // final output
    fflush(stdout);
}


int main() {
    printf("\033[2J\033[1;1H");
    printf("Received: ");
    for (int i = 0; i < 2; i++) {  // msg.txt langth
        receive_char();
    }
    printf("\n");
    return 0;
}
