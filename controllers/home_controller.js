module.exports.home = function(req,res){
        // return res.end('<h1>Express is up for Codeial</h1> <h2>Express is up for Codeial</h2>');
        return res.render('home',{
                title:'Home'
        });
}

console.log('Home controller is loaded');