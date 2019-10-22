const express = require('express')
const app = express()
const port = 80
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.post('/api/ipn', (req, res) => {
    console.log(req.body);
    res.send('Hello World!')})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));