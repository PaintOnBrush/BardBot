# BardBot

<h1>REQUIREMENTS</h1>

~120 MBs of disk space for download.. double or triple that to install requirements. <br />
openssl <br />
python <br />
greasemonkey/tampermonkey <br />
open ports: 8000, 443


<h2>1. install openssl: </h2><br />
for debian based linux: apt install openssl <br />
for windows: Setup Included (may need a restart)


<h2>2. generate keys for nginx server using openssl: </h2><br />
cd nginx-1.9.14\conf <br />
openssl req -x509 -newkey rsa:2048 -sha256 -keyout cert.key -out cert.crt -days 1000 -nodes <br />
windows: copy cert.crt cert.pem <br />
linux: cp cert.crt cert.pem <br />

<h2>3. get and install python: </h2><br />
for debian: apt install python <br />
for windows: setup included (64bit)

<h2>4. install python requirements: </h2><br />
cd poetry-generator <br />
pip install -r requirements.txt <br />

<h2>5. run poetry generator: </h2><br />
windows: run.bat <br />
linux: chmod +x run.sh && ./run.sh

<h2>6. run nginx server: </h2><br />
windows: nginx-1.9.14\nginx.exe <br />
linux: use the configfile from nginx-1.9.14/conf/nginx.conf

<h2>7. run userscript in reddit robin window.</h2>

<h2>8. ??</h2>

<h2>9. profit</h2>
