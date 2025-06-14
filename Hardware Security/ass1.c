#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <x86intrin.h>  
#include <emmintrin.h> 

#define ITERATIONS 1000
#define ARRAY_SIZE (1024 * 1024 * 8)  // 8 MB

uint64_t measure_access_time(volatile int *addr, int flush) {
    uint64_t start, end;
    if (flush) _mm_clflush((void *)addr);
    _mm_lfence();
    start = __rdtsc();
    *addr;
    _mm_lfence();
    end = __rdtsc();
    return end - start;
}

int main() {
    volatile int *array = malloc(sizeof(int) * ARRAY_SIZE);
    if (!array) {
        perror("malloc failed");
        return 1;
    }

    for (int i = 0; i < ARRAY_SIZE; i += 64) array[i] = i;

    FILE *fp = fopen("latencies.csv", "w");
    fprintf(fp, "type,latency\n");

    for (int i = 0; i < ITERATIONS; ++i) {
        uint64_t t = measure_access_time(&array[0], 0);
        fprintf(fp, "cache,%lu\n", t);
    }

    for (int i = 0; i < ITERATIONS; ++i) {
        uint64_t t = measure_access_time(&array[0], 1);
        fprintf(fp, "dram,%lu\n", t);
    }

    fclose(fp);
    free((void *)array);

    printf("Latency data written to latencies.csv\n");
    return 0;
}
