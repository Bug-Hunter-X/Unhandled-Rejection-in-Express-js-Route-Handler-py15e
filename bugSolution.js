const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  });
});
app.listen(3000, () => console.log('Server started'));

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve({ message: 'Success' });
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}