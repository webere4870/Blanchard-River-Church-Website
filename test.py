from threading import Thread
import time
def func1(var):
    counter = 0
    while counter < var:
        counter += 1
        time.sleep(2)
    print("Func1 done")

def func2(var):
    counter = 0
    while counter < var:
        counter += 1
        time.sleep(1)
    print("Func2 done")

x = Thread(target=func1, args=(3,))
y = Thread(target=func2, args=(5,))
x.start()
y.start()
x.join()
y.join()
print("Here")

print(time.perf_counter())