import random

# random_number =random.randint(0,10)
# print(random_number)
x=input("please enter a number:")
if x.isdigit():
    x=int(x)
    if x<=0:
        print("please enter a number greater then 0 next time!")
        quit()

else:
    print("please enter a number:")
    quit()

x=random.randint(0,x)
guesses =0
while True:
 guesses+=1
 user_guess=input("Make a guess:")
 if user_guess.isdigit():
     user_guess =int(user_guess)
 else:
     print("please enter a number next time!")
     continue
 if user_guess==x:
     print("you got it :)********************************")
     break
 elif user_guess>x:
     print("you were above number")
 else:
     print("you were below the number ! " )
print(f"you got it in{guesses} guesses")







