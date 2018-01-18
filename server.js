'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/api/codefellows', (req, res) => {
    console.log('api sent!')
    res.json({ company: 'codefellows', courses: [201, 301, 401] });
});

app.listen(PORT, () => {
    console.log('currently listening on PORT:', PORT)
});