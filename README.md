Install http-server (globally) with:
npm install --global http-server

Start your http server by issuing:
http-server -c-1
(or using start.bat)

It'll be started at:
http://localhost:8080


The "public" folder was renamed to "pub" in order to avoid an http-server bug on which it tried to open the ./public dir instead of ./
