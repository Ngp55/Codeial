// const Post = require('../models/post');

// module.exports.home = function(req,res){
//         // return res.end('<h1>Express is up for Codeial</h1> <h2>Express is up for Codeial</h2>');
//         // console.log(req.cookies);
//         // res.cookie('user_id',25);
//         // Post.find({}, function(err,posts){
//         //         return res.render('home',{
//         //                 title:'Codeial || Home',
//         //                 posts: posts
//         //         });
//         // });
//         Post.find({})
//         .populate('user')
//         .populate({
//                 path: 'comments',
//                 populate:{
//                         path: 'user'
//                 }
//         })
//         .exec(function(err, posts){
//                 return res.render('home',{
//                         title:'Codeial || Home',
//                         posts: posts
//                 });

// })
// }

// console.log('Home controller is loaded');
const Post = require('../models/post');

module.exports.home = function(req, res) {
  Post.find({})
    .populate('user')
    .populate({
      path: 'comments',
      populate: {
        path: 'user'
      }
    })
    .exec(function(err, posts) {
      if (err) {
        console.log('Error:', err);
        return;
      }
      
      return res.render('home', {
        title: 'Codeial || Home',
        posts: posts
      });
    });
};
