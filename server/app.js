import mongoose from 'mongoose';
import express from 'express';

//Auth Controllers
import LoginController from './controllers/Auth/LoginController';
import RegisterController from './controllers/Auth/RegsiterController'

//Blog Post Controllers
import CreatePostController from './controllers/Post/CreatePostController';
import ReadPostController from './controllers/Post/ReadPostController';
import UpdatePostController from './controllers/Post/UpdatePostController';
import DeletePostController from './controllers/Post/DeletePostController';

const app = express(); 
const port = process.env.PORT || 4300;

app.use(express.json());
app.use(express.urlencoded());

//AUTH APIs
app.use("/api/loginUser", LoginController)
app.use("/api/registerUser", RegisterController);

//BLOG POST APIs
app.use("/api/post/create", CreatePostController);
app.use("/api/post/getAll", ReadPostController);
app.use("/api/post/update", UpdatePostController);
app.use("/api/post/delete/{_id}", DeletePostController)

app.listen(port, () => { 
    console.log(` Server is listening to ${port}`);
})