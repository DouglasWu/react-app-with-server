import express from 'express';

const app = express();

const port = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.json({
    message: 'whatever you want to return :)'
  });
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
