#include <stdio.h>
#include <stdint.h>
#include <x86intrin.h> // for rdtsc, clflush, lfence
#include <stdlib.h>

#define NUM_SAMPLES 100000

// Function to measure access latency
uint64_t measure_latency(volatile int *addr, int flush_cache) {
    uint64_t start, end;

    if (flush_cache) {
        _mm_clflush((void *)addr); // evict from cache
    }

    _mm_lfence(); // serialize
    start = __rdtsc();
    _mm_lfence(); // serialize
    int temp = *addr;
    _mm_lfence(); // serialize
    end = __rdtsc();
    _mm_lfence();

    return end - start;
}

int main() {
    int *array = (int *)malloc(sizeof(int));
    uint64_t total_cache = 0, total_dram = 0;

    // Warm-up to load into cache
    volatile int dummy = *array;

    for (int i = 0; i < NUM_SAMPLES; ++i) {
        total_cache += measure_latency(array, 0);   // No flush → Cache hit
        total_dram += measure_latency(array, 1);    // Flush → DRAM access
    }

    printf("Average Cache Access Latency : %lf cycles\n", total_cache / (double)NUM_SAMPLES);
    printf("Average DRAM Access Latency  : %lf cycles\n", total_dram / (double)NUM_SAMPLES);

    free(array);
    return 0;
}

