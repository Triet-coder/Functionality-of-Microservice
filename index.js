const express = require('express');
const app = express();
const port = 3000;

// Helper function to validate numbers
function validateNumbers(num1, num2, res) {
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Both num1 and num2 must be valid numbers.' });
    return false;
  }
  return true;
}

app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2, res)) return;
  res.json({ result: parseFloat(num1) + parseFloat(num2) });
});

app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2, res)) return;
  res.json({ result: parseFloat(num1) - parseFloat(num2) });
});

app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2, res)) return;
  res.json({ result: parseFloat(num1) * parseFloat(num2) });
});

app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2, res)) return;
  if (parseFloat(num2) === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed.' });
  }
  res.json({ result: parseFloat(num1) / parseFloat(num2) });
});

app.get('/power', (req, res) => {
  const { base, exponent } = req.query;
  const result = Math.pow(Number(base), Number(exponent));
  res.json({ result });
});

app.get('/sqrt', (req, res) => {
  const { number } = req.query;
  const result = Math.sqrt(Number(number));
  res.json({ result });
});

app.get('/modulo', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) % Number(b);
  res.json({ result });
});


app.listen(port, () => {
  console.log(`Arithmetic microservice running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.json({ message: `Microservice running at http://localhost:${port}` });
});
