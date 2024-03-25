from cryptography.fernet import fernet
def write_key():
    key=fernet.generate_key()
    with open("key.key","+ab") as key_file:
        key_file.write(key)


#write_key()
def load_key():
    file=open("key.key","rb")
    key=file.read()
    file.close()
    return key
key=load_key()
fr=fernet


def add():
  name =input("Account Name:")
  password =input("password:")
  with open("password.txt","a") as f:
      f.write(f"{name}{fr.encrypt(password.encode()).decode()}/n")
def view():
    with open("password.txt","r") as f:
        for line in f.readlines():
            data=line.rstrip()
            name,password=data.split("||")
            print(f"user:{name},password:{fr.decrypt(password.encode()).decode()}")



while True:
    mode=input("Whould you like to add or view passwords,press q to quit?(add,viwe):")
    if mode=="q":
        break
    elif mode=="add":
        add()
    elif mode=="view":
        view()
    else:

        print("invalid Mode!")
        continue


