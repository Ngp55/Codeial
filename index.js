const express = require('express');

const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
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