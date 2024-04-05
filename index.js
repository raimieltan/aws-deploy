const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/prominentaws.zapto.org/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/prominentaws.zapto.org/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/prominentaws.zapto.org/chain.pem')
};

https.createServer(httpsOptions, app).listen(443, () => {
  console.log('HTTPS server running on port 443');
});
