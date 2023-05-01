const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//used for session cookie
// const session = require('express-session');
const session = require('express-session');
// const passport = require('passport');
const passport = require('passport');

const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

// const sassMiddleware = require('node-sass');


// app.use(sassMiddleware({
//     src:'/assets/scss',
//     dest:'/assets/css',
//     debug:true,
//     outputStyle:'extended',
//     prefix:'css'
// }));

app.use(express.urlencoded());//this line is deprecated
//app.use(express.urlencoded({ extended: true }));//use this in the place of express.urlencoded
app.use(cookieParser());

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



app.use(express.static('./assets'));

app.use(expressLayouts);
//use express 


app.set('view engine','ejs');
app.set('views','./views');



// mongo store is used to store the session cookie in the db
app.use(session({
    name:'codeial',
    //ToDo change the secret before deployment in porduction changge
    secret:'somethinsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 *100)
    },
    store: MongoStore.create({
        
            // mongooseConnection:db,
            // autoRemove:'disabled'
            mongoUrl:'mongodb://localhost/codeial_development',
            autoRemove:"disabled"
        
},
function(err){
    console.log(err || 'connect-mongodb setup ok');
})

}));




app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes'));

app.listen(port, function(error){
    if(error){
        //console.log("Error:",error);
        //`` this is used inside the console.log() called interpolar
        console.log(`Error in running the server: ${err}`);

    }

    console.log(`Server is running on port: ${port}`);
})