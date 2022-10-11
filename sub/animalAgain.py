from abc import ABC, abstractclassmethod
from audioop import add
from unicodedata import name

class Animal(ABC):
    def __init__(self, name):
        self.name = name
    @abstractclassmethod
    def printInfo():
        pass

class Dog(Animal):
    def __init__(self, name, address):
        super().__init__(name)
        self.address = address
    
    def printInfo(self):
        print(self.name, self.address)
    