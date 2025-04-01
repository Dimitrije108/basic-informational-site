import http from 'http';
import fs from 'fs';
import url from 'url';

const getPath = (reqUrl) => {
	const parsedUrl = url.parse(reqUrl, true);

	if (parsedUrl.pathname === '/') {
		return './index.html';
	} else {
		return `.${parsedUrl.pathname}.html`;
	};
};

http.createServer((req, res) => {
	fs.readFile(getPath(req.url), 'utf8', (err, data) => {
		if (err || !data) {
			fs.readFile('./404.html', 'utf8', (err, errData) => {
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.write(errData);
				return res.end();
			})
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		}
	});
}).listen(8080);

