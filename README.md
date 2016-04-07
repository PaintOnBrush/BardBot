# BardBot

REQUIREMENTS 

~120 MBs of disk space for download.. double or triple that to install requirements.

openssl python greasemonkey/tampermonkey 

open ports: 8000, 443


1. install openssl:
for debian based linux: apt install openssl |
for windows: Setup Included (may need a restart)


2. generate keys for nginx server using openssl:
nginx-1.9.14\conf\cert.pem |
nginx-1.9.14\conf\cert.crt

3. get and install python:
for debian: apt install python |
for windows: setup included (64bit)

4. install python requirements:
cd poetry-generator |
pip install -r requirements.txt

5. run poetry generator:
windows: run.bat |
linux: chmod +x run.sh && ./run.sh

6. run nginx server:
windows: nginx-1.9.14\nginx.exe |
linux: use the configfile from nginx-1.9.14/conf/nginx.conf

7. run userscript in reddit robin window.

8. ??

9. profit
