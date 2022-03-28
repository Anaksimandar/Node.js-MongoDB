const express = require('express');
const app = express();
const {errorMiddleware} = require('./middleware/errorMiddleware');
const mongo = require('mongodb');
const {connection} = require('./DBconnection/dbConnection');
connection();

app.use(express.urlencoded({extended:false}))
app.use('/api/korisnik',require('./routes/korisnikRoutes'))
app.use(errorMiddleware);
app.listen(5000,()=>{
    console.log('Slusam port 5000');
})