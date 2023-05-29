import app from './app.js';

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log();
  console.log(`Listening on http://localhost:${port}`);
});