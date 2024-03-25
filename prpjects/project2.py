print("welcome to my computer")

playing =input("Do you went to play")



if playing .lower()!="yes":
    print("sorry")
elif playing.lower()=="yes":
  print ("ok ,lets go play")
  score=0
  quist=0

quist+=1
answer=input("what is cpu stands for?")
if answer.lower() == input("central procssing unit:"):
    score+=1
    print("correct")

else:
    print("in correct")

quist+=1
answer=input("what is RAm stands for?")
if answer.lower() == input("random procssing memory:"):
    score+=1
    print("correct")

else:
    print("in correct")



quist+=1
answer=input("what is psu stands for?")
if answer.lower() == input("power supply:"):
    score+=1
    print("correct")

else:
    print("in correct")




print(f"you got{score} answer correct")
print(f"your {(score/quist)} answer corect!")