import http.server
import socketserver
import os

build_dir = os.path.join(os.path.dirname(__file__), "public")
os.chdir(build_dir)

class HttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self) -> None:
        if self.path in ['/', '/index.html', '/about', '/archive'] or self.path.startswith('/post/') or self.path.startswith('/tag/') or self.path.startswith('/search') or self.path.startswith('/project'):
            self.path = 'index.html'
        # self.path = 'index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)
    
PORT = 8000

Handler = HttpRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()