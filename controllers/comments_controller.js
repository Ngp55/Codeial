const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req ,res){
    Post.findById(req.body.post, function(err, post){
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.body._id
            },function(err, comment){
                //handle error
                if(err){
                    console.log('Kya hai ye:->'+err);
                }
               
                post.comments.push(comment);
                post.save();

                res.redirect('/');
            });
        }
    });
};
// const Comment = require('../models/comment');
// const Post = require('../models/post');

// module.exports.create = async function (req, res) {
//   try {
//     const post = await Post.findById(req.body.post);

//     if (post) {
//       const comment = await Comment.create({
//         content: req.body.content,
//         post: req.body.post,
//         user: req.body._id
//       });

//       post.comments.push(comment);
//       post.save();
//       req.flash('success', 'Comment added succesfully!');

//       return res.redirect('/');
//     }
//   } catch (err) {
//     console.log('Kya hai ye:->' + err);
//   }
// };

// module.exports.create = async function(req, res) {
//     try {
//         let post = await Post.findById(req.body.post);

//         if(post) {
//             let comment = await Comment.create({
//                 content: req.body.content,
//                 post: req.body.post,
//                 user: req.user._id
//             });

//                 post.comments.push(comment);
//                 post.save();
//                 req.flash('success', 'Comment added succesfully!');
//                 return res.redirect('/');
//         }

//     } catch (err) {
//         // req.flash('error', err);
//         return res.redirect('back');
//     }
   
// }