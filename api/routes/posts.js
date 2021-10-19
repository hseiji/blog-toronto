const router = require('express').Router();
const Post = require('../models/Post');
// const mongoose = require('mongoose');


//Get ALL existing posts
router.get('/', async (req,res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        //only brings posts from specific username
        if(username) {
            posts = await Post.find({ username:username });
        } 
        //only brings posts from specific category
        else if(catName) {
            posts = await Post.find({ categories:{
                $in:[catName]
            }});
        } 
        //bring ALL posts if nothing is specified
        else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get an existing post
router.get('/:id', async (req,res) => {
        try {
            const post = await Post.findById(req.params.id);
            res.status(200).json(post);
        } catch (err) {
            res.status(500).json(err);
        }
});

//Create Post
router.post('/', async (req,res) => {
    console.log(req.body);
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);     
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update existing Post
router.put('/:id', async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        // if(post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id, {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        // } else {
        //     res.status(401).json("Please only update your posts.")
        // }
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete existing Post
router.delete('/:id', async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        // if(post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted.");
            } catch (err) {
                res.status(500).json(err);
            }
        // } else {
        //     res.status(401).json("Please only delete your own posts.")
        // }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;