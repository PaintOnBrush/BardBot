# BardBot

REQUIREMENTS 

~120 MBs of disk space for download.. double or triple that to install requirements.

openssl python greasemonkey/tampermonkey 

open ports: 8000, 443


1. install openssl: <br />
for debian based linux: apt install openssl <br />
for windows: Setup Included (may need a restart)


2. generate keys for nginx server using openssl: <br />
openssl req -x509 -newkey rsa:2048 -sha256 -keyout cert.key -out cert.crt -days 1000 -nodes <br />
nginx-1.9.14\conf\cert.pem<br />
nginx-1.9.14\conf\cert.crt

3. get and install python: <br />
for debian: apt install python <br />
for windows: setup included (64bit)

4. install python requirements: <br />
cd poetry-generator <br />
pip install -r requirements.txt <br />

5. run poetry generator: <br />
windows: run.bat <br />
linux: chmod +x run.sh && ./run.sh

6. run nginx server: <br />
windows: nginx-1.9.14\nginx.exe <br />
linux: use the configfile from nginx-1.9.14/conf/nginx.conf

7. run userscript in reddit robin window.

8. ??

9. profit
