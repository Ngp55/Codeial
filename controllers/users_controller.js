module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    });
}
console.log("user contoller is loaded");
//controller to render sign up
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title:'Codeial | Sign up'
    });
    
}

//controller to render sign in
module.exports.signIn= function(req,res){
    return res.render('user_sign_in',{
        title:'Codeial | Sign In'
    });
}

//get the sign up data
module.exports.create = function(req,res){

}
//Sign in and create session
module.exports.createSession = function(req,res){

}