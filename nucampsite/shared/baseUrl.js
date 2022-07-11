// set up your app to find your computer's IP address and the port you will serve on
// your IP address may change if you connect to a different network or disconnect and reconnect from your current network
// export const baseUrl = 'http://192.168.59.241:3001/'; // previously working - network request error
export const baseUrl = 'http://172.17.203.225:3001/'; // new, but give 404 error


/* ------ AS OF 11/7/2020...

C:\Users\enawarriorprincess>ipconfig

Windows IP Configuration


Ethernet adapter Ethernet 4:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . : 

Ethernet adapter VirtualBox Host-Only Network:

   Connection-specific DNS Suffix  . : 
   Link-local IPv6 Address . . . . . : fe80::8d52:cf96:1e1a:30fd%12
   IPv4 Address. . . . . . . . . . . : 192.168.56.1
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 

Wireless LAN adapter Local Area Connection* 2:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Wireless LAN adapter Local Area Connection* 13:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Wireless LAN adapter Wi-Fi:

   Connection-specific DNS Suffix  . : hsd1.wa.comcast.net
   IPv4 Address. . . . . . . . . . . : 10.0.0.243
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 10.0.0.1

Ethernet adapter Bluetooth Network Connection:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Ethernet adapter vEthernet (Default Switch):

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::ad73:76fe:75a3:a30c%34
   IPv4 Address. . . . . . . . . . . : 172.17.203.225
   Subnet Mask . . . . . . . . . . . : 255.255.255.240
   Default Gateway . . . . . . . . . :


------ */