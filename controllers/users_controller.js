const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    });
}
console.log("user contoller is loaded");
//controller to render sign up
module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }


    return res.render('user_sign_up', {
        title:'Codeial | Sign up'
    });
    
}

//controller to render sign in
module.exports.signIn= function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title:'Codeial | Sign In'
    });
}

//get the sign up data
module.exports.create = async function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    let user = await User.findOne({email: req.body.email})
        if(!user){
            User.create(req.body)
            console.log(req.body);
            return res.redirect('/users/sign-in');   
            }

        
        // else
        // {
        //     return res.redirect('back');
        // }

}
//Sign in and create session
module.exports.createSession = function(req,res){
    return res.redirect('/');

}

module.exports.destorySession = function(req, res){
        req.logout(req.user, err => {
            if(err){
                return next(err);
            }
        })

    return res.redirect('/');
}