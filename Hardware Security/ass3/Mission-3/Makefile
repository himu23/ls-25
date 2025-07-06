CC = gcc
CFLAGS = -Wall -O2
DEPS = utils.h
OBJ = sender.o receiver.o utils.o

all: sender receiver

sender: sender.o utils.o
	$(CC) $(CFLAGS) -o $@ $^

receiver: receiver.o utils.o
	$(CC) $(CFLAGS) -o $@ $^

%.o: %.c $(DEPS)
	$(CC) $(CFLAGS) -c $< -o $@

.PHONY: clean

clean:
	rm -f sender receiver *.o
