import random
number=random.randrange(1,50)
guess=int(input("Guess a number between 1 and 50: "))


while guess != number:
        if guess < number:
            print("you need to guess higher: try again")
            guess=int(input("guess anumber between 1 and 50: "))
        else:
            print("you need to guess lower:try again")
            guess=int(input("guess anumber between 1 nad 50:"))



import random
number=5
guess=int(input("guess that numbers less than 5:"))


if guess < 5:
    print("numbers which less than 5:")
else:
    print("try again")    

