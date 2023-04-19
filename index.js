const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());//this line is deprecated
//app.use(express.urlencoded({ extended: true }));//use this in the place of express.urlencoded
app.use(cookieParser());

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScript',true);



app.use(express.static('./assets'));

app.use(expressLayouts);
//use express 
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port, function(error){
    if(error){
        //console.log("Error:",error);
        //`` this is used inside the console.log() called interpolar
        console.log(`Error in running the server: ${err}`);

    }

    console.log(`Server is running on port: ${port}`);
})