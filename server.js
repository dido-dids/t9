import {convertNumberToWords} from "./utils/converter";

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

console.log(convertNumberToWords());

app.get('/api/t9/:numbers', (req, res) => {
    res.json(convertNumberToWords(req.params.numbers));
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));


