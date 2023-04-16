module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    });
}
console.log("user contoller is loaded");