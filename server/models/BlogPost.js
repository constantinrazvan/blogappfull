import mongoose from 'mongoose';

const blogPost = mongoose.Schema({
    _id: Number,
    title: String, 
    body: String,
    admin: String, 
}); 

const BlogPost = new mongoose.model("BlogPost", blogPost);

export default BlogPost;