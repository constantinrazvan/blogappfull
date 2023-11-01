import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String, 
    email: String,
    password: String
})

const Account = new mongoose.model("Account", userSchema);

export default Account;