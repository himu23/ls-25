#include <stdio.h>
#include <time.h>
#include <unistd.h>
#include "utils.h"

unsigned long long rdtsc() {
	unsigned long long a, d;
	asm volatile ("mfence");
	asm volatile ("rdtsc" : "=a" (a), "=d" (d));
	a = (d<<32) | a;
	asm volatile ("mfence");
	return a;
}

void maccess(void* p)
{
  asm volatile ("movq (%0), %%rax\n"
    :
    : "c" (p)
    : "rax");
}

void flush(void* p) {
    asm volatile ("clflush 0(%0)\n"
      :
      : "c" (p)
      : "rax");
}

int main(){

    // ********** DO NOT MODIFY THIS SECTION **********
    FILE *fp = fopen(MSG_FILE, "r");
    if(fp == NULL){
        printf("Error opening file\n");
        return 1;
    }

    char msg[MAX_MSG_SIZE];
    int msg_size = 0;
    char c;
    while((c = fgetc(fp)) != EOF){
        msg[msg_size++] = c;
    }
    fclose(fp);

    clock_t start = clock();
    // **********************************************
    // ********** YOUR CODE STARTS HERE **********



    // ********** YOUR CODE ENDS HERE **********
    // ********** DO NOT MODIFY THIS SECTION **********
    clock_t end = clock();
    double time_taken = ((double)end - start) / CLOCKS_PER_SEC;
    printf("Message sent successfully\n");
    printf("Time taken to send the message: %f\n", time_taken);
    printf("Message size: %d\n", msg_size);
    printf("Bits per second: %f\n", msg_size * 8 / time_taken);
    // **********************************************
}
