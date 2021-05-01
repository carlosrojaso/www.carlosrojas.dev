const functions = require('firebase-functions');
const prpl = require('prpl-server');
const express = require('express');
const rendertron = require('rendertron-middleware');
const minify = require('express-minify');
const compression = require('compression');

const app = express();

const rendertronMiddleware = rendertron.makeMiddleware({
	proxyUrl: 'https://render-tron.appspot.com/render',
	injectShadyDom: true,
});

app
	.use(compression())
	.use(minify())
	.use((req, res, next) => {
		req.headers['host'] = 'carlosrojas-dev.firebaseapp.com';
		return rendertronMiddleware(req, res, next);
	});

app.get('/*', prpl.makeHandler('./build', require('./build/polymer.json')));

exports.app = functions.https.onRequest(app);
