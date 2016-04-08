# BardBot

<h2>REQUIREMENTS</h2>

~120 MBs of disk space for download.. double or triple that to install requirements. <br />
openssl <br />
python <br />
greasemonkey/tampermonkey <br />
open ports: 8000, 443


<h3>1. install openssl: </h3><br />
for debian based linux: apt install openssl <br />
for windows: Setup Included (may need a restart)


<h3>2. generate keys for nginx server using openssl: </h3><br />
cd nginx-1.9.14\conf <br />
openssl req -x509 -newkey rsa:2048 -sha256 -keyout cert.key -out cert.crt -days 1000 -nodes <br />
windows: copy cert.crt cert.pem <br />
linux: cp cert.crt cert.pem <br />

<h3>3. get and install python: </h3><br />
for debian: apt install python <br />
for windows: setup included (64bit)

<h3>4. install python requirements: </h3><br />
cd poetry-generator <br />
pip install -r requirements.txt <br />

<h3>5. run poetry generator: </h3><br />
windows: run.bat <br />
linux: chmod +x run.sh && ./run.sh

<h3>6. run nginx server: </h3><br />
windows: nginx-1.9.14\nginx.exe <br />
linux: use the configfile from nginx-1.9.14/conf/nginx.conf

<h3>7. run userscript in reddit robin window.</h3>

<h3>8. ??</h3>

<h3>9. profit</h3>
