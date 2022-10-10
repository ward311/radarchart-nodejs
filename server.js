const express = require('express');
const app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
app.set('view-engine')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/page2', (req, res) => {
    res.render('page2.ejs')
})
app.get('/result', (req, res) => {
    res.render('result_page.ejs')
})

app.listen(3000)