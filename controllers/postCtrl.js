const Post = require('../models/post');

exports.getPosts = (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
}
