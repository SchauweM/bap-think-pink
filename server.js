const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const next = require('next');
const admin = require('firebase-admin');

const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./utils/i18n');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

const firebase = admin.initializeApp(
  {
    credential: admin.credential.cert(require('./credentials/server')),
  },
  'server',
);

(async () => {
  await app.prepare();
  const server = express();

  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.use(bodyParser.json());
  server.use(
    session({
      secret: 'geheimnis',
      saveUninitialized: true,
      store: new FileStore({ secret: 'geheimnis' }),
      resave: false,
      rolling: true,
      cookie: { maxAge: 604800000, httpOnly: true }, // week for testing
    }),
  );

  // eslint-disable-next-line no-shadow
  server.use((req, res, next) => {
    req.firebaseServer = firebase;
    next();
  });

  // eslint-disable-next-line consistent-return
  server.post('/api/login', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const { token } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        req.session.decodedToken = decodedToken;
        return decodedToken;
      })
      .then((decodedToken) => res.json({ status: true, decodedToken }))
      .catch((error) => res.json({ error }));
  });

  server.post('/api/logout', (req, res) => {
    req.session.decodedToken = null;
    res.json({ status: true });
  });


  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})();
