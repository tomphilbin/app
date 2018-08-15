import * as express from 'express';
import { AddressInfo } from 'net';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import App from './App';
import html from './html';

const app = express();

const reactDom = renderToString(<App />);
const helmet = Helmet.renderStatic();

const response = html(reactDom, helmet);

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(response);
});

const server = app.listen(8080, () =>
  console.info(`Listening on port ${(server.address() as AddressInfo).port}`)
);
