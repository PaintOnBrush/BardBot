# BardBot

REQUIREMENTS

~120 MBs of disk space for download.. double or triple that to install requirements. <br />
openssl <br />
python <br />
greasemonkey/tampermonkey <br />
open ports: 8000, 443 <br /> <br />


**1. install openssl:** <br />
for debian based linux: apt install openssl <br />
for windows: Setup Included (may need a restart) <br />

**2. generate keys for nginx server using openssl:** <br />
cd nginx-1.9.14\conf <br />
openssl req -x509 -newkey rsa:2048 -sha256 -keyout cert.key -out cert.crt -days 1000 -nodes <br />
windows: copy cert.crt cert.pem <br />
linux: cp cert.crt cert.pem <br />

**3. get and install python:** <br />
for debian: apt install python <br />
for windows: setup included (64bit) <br />

**4. install python requirements:** <br />
cd poetry-generator <br />
pip install -r requirements.txt <br />

**5. run poetry generator:** <br />
windows: run.bat <br />
linux: chmod +x run.sh && ./run.sh <br />

**6. run nginx server:** <br />
windows: nginx-1.9.14\nginx.exe <br />
linux: use the configfile from nginx-1.9.14/conf/nginx.conf <br />

**7. run userscript in reddit robin window.** <br />

**8. ??**<br />

**9. profit**
