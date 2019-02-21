const express = require('express');
const app = express();
const port = 1337;

app.use('/', express.static('./'));

// app.get('/', (req, res) => {
//   res.send('index.html');
// });


app.listen(port, () => {
  console.log('server running on this port', port);
}) //do something