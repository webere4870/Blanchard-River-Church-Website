import os

files = os.listdir("testFolder")
pathName = os.getcwd() + "\\testFolder\\";
print(pathName)
for file in files:
    os.remove(pathName + file)

os.rmdir("testFolder")