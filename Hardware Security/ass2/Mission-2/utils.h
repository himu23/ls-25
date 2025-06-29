#ifndef UTILS_H
#define UTILS_H

#include <stdint.h>
#include <stdio.h>

#define MSG_FILE "msg.txt"
#define MAX_MSG_SIZE 500

#define INTERVAL 400000
#define THRESHOLD 100
#define SYNC_PATTERN 0b10101010

double check_accuracy(char *received_msg, int received_msg_size);
uint64_t rdtsc();
void clflush(void *addr);
void delay_cycles(uint64_t cycles);
void* setup_shared_memory();

#endif
