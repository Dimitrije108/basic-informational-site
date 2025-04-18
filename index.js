const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/contact-me', (req, res) => {
	res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, '/about.html'));
});

app.get(/(.*)/, (req, res) => {
	res.sendFile(path.join(__dirname, '/404.html'));
});

app.listen(PORT, () => {
	console.log(`Server running port ${PORT}!`);
});
