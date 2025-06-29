#include <stdio.h>
#include <stdlib.h>
#include <sys/mman.h>
#include <unistd.h>
#include <stdint.h>
#include "utils.h"

uint64_t rdtsc() {
    unsigned long long a, d;
    asm volatile ("mfence");
    asm volatile ("rdtsc" : "=a" (a), "=d" (d));
    a = (d << 32) | a;
    asm volatile ("mfence");
    return a;
}

void clflush(void *p) {
    asm volatile ("clflush 0(%0)" : : "r"(p) : "memory");
}

void delay_cycles(uint64_t cycles) {
    uint64_t start = rdtsc();
    while (rdtsc() - start < cycles);
}

void* setup_shared_memory() {
    void *addr = mmap(NULL, 4096, PROT_READ | PROT_WRITE,
                      MAP_SHARED | MAP_ANONYMOUS, -1, 0);
    if (addr == MAP_FAILED) {
        perror("mmap");
        exit(1);
    }
    return addr;
}

// DO NOT MODIFY THIS FUNCTION
double check_accuracy(char* received_msg, int received_msg_size){
    FILE *fp = fopen(MSG_FILE, "r");
    if(fp == NULL){
        printf("Error opening file\n");
        return 1;
    }

    char original_msg[MAX_MSG_SIZE];
    int original_msg_size = 0;
    char c;
    while((c = fgetc(fp)) != EOF){
        original_msg[original_msg_size++] = c;
    }
    fclose(fp);

    int min_size = received_msg_size < original_msg_size ? received_msg_size : original_msg_size;

    int error_count = (original_msg_size - min_size) * 8;
    for(int i = 0; i < min_size; i++){
        char xor_result = received_msg[i] ^ original_msg[i];
        for(int j = 0; j < 8; j++){
            if((xor_result >> j) & 1){
                error_count++;
            }
        }
    }

    return 1 - (double)error_count / (original_msg_size * 8);
}
