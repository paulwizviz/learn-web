const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/auth', (req, res) => {
    console.log(req.body);
    res.json({
        id: "john",
        displayName: "John Doe"
    })
});
  
const port = 9000;

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});