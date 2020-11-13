# demo: CORS

通过 express 开了三个 web server：

- page (3000) 展示了一个页面，这里有按钮来出发 fetch post request
- jack (8080) 开启了 CORS 支持的 server
- jane (8081) 没有开启 CORS 支持的 server