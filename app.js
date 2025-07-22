const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('form', { user: null });
});



app.post('/submit', (req, res) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
  };
  res.render('form', { user: userData });
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
