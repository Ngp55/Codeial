const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;



//console.log('Passport local strategy is loadeddd:_>');
//authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
},
function(email,password,done){
    //find a user and establish the identity
    User.findOne({email:email}, function(err,user){
        if(err){
            console.log('error in find user -> Passprot')
            return done(err);
        }
        if(!user || user.password != password){
            console.log('Invalid user');
            return done(null , false);
        }
        return done(null,user);
    });

}
));

//serializing the user to decide which key is to be kept in the cookie
passport.serializeUser(function(user,done){
    done(null ,user.id);
});



//deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        if(err){
            console.log('error in find user -> Passport')
            return done(err);
        }
        return done(null,user);
    });
});

//check if user is authenticated
passport.checkAuthentication = function(req,res,next){
    //if the user is signed in , the pass on the request to the next function(Controlloer action)

    if(req.isAuthenticated()){
        return next();
    }

    //if the user is not signed in
    return res.redirect('/users/sign-in');
}
passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the session cookie and we are just sendding to the lovals views
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;