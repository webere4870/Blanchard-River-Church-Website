from multiprocessing import Process, cpu_count
import string
import time

def counter(num):
    count =0
    while count < num:
        count +=1 

def main():
    print(cpu_count)
    a = Process(target=counter, args=(100000000, ))
    b = Process(target=counter, args=(50000000, ))
    a.start()
    a.join()
    print("Finished in: " + str(time.perf_counter()))


if __name__ == "__main__":
    main()