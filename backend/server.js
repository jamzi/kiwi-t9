const express = require('express');
const app = express();
const generateWords = require('./helpers/utils');

app.use(express.json());

app.post('/suggestions', (req, res) => {
  if (!req.body.numbers) {
    return res.status(400).send('Numbers for generating words are required');
  }

  const suggestions = generateWords(req.body.numbers, req.body.onlyRealWords);
  res.json(suggestions);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
