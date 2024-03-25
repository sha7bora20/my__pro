from speedtest import Speedtest
wifi=Speedtest()
downlaod=wifi.download()
print(f"Download{downlaod}")
upload=wifi.upload()
print("GEtting download spedd")
print(f"upload{upload}")
