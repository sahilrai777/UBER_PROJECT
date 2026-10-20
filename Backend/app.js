const dotenv = require('dotenv');
dotenv.config();
const  express = require('express');
const app = express ();
const cookieParsar= require('cookie-parser');
const cors= require('cors');
app.use(cors());
const connectToDb= ('./db/db');
const userRouts = require("./routes/user.routes")

connectToDb();
app.use (cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use( cookieParsar()); 


app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.use('/users', userRouts);

module.exports =app;


