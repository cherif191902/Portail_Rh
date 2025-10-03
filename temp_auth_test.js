const http = require('http');
const https = require('https');
const url = require('url');

function postJson(u, data) {
  return new Promise((resolve, reject) => {
    const p = url.parse(u);
    const opts = {
      hostname: p.hostname,
      port: p.port,
      path: p.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = http.request(opts, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(body) }); } catch (e) { resolve({ status: res.statusCode, body: body }); }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function getWithAuth(u, token) {
  return new Promise((resolve, reject) => {
    const p = url.parse(u);
    const opts = {
      hostname: p.hostname,
      port: p.port,
      path: p.path,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    };

    const req = http.request(opts, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => {
        resolve({ status: res.statusCode, body });
      });
    });

    req.on('error', reject);
    req.end();
  });
}

(async () => {
  try {
    const login = await postJson('http://localhost:8089/api/auth/signin', JSON.stringify({ matricule: 'TEST001', password: 'password123' }));
    console.log('LOGIN STATUS', login.status);
    console.log('LOGIN BODY', JSON.stringify(login.body));
    const token = login.body && login.body.token ? login.body.token : null;
    if (!token) {
      console.error('No token received');
      process.exit(2);
    }
    const getTypes = await getWithAuth('http://localhost:8089/conge/getTypeConge', token);
    console.log('GET TYPES STATUS', getTypes.status);
    console.log('GET TYPES BODY', getTypes.body);
  } catch (e) {
    console.error('ERROR', e && e.message ? e.message : e);
    process.exit(1);
  }
})();
