const express = require('express')
const app = express()
const port = 80

app.post('/api/ipn', (req, res) => {
    console.log(req.body);
    res.send('Hello World!')})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));