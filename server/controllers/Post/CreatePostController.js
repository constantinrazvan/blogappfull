import mongoose from 'mongoose';
import BlogPost from '../../models/BlogPost';
import { title } from 'process';

const CreatePostController = (req, res) => { 

    const newPost = BlogPost({
        title: req.body.title, 
        body: req.body.body,
        author: req.body.author
    })

    if( !title || !body || !author ){ 
        res.status(400).json({ error : "Please insert all fields!"});
    } else { 
        newPost.save(); 
        res.status(200).json({ message: "Succes! Post has been posted! "});
    }
}

export default CreatePostController; 