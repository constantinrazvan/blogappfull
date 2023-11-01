import mongoose from "mongoose";
import Account from "../../models/Account";
import bcrypt from 'bcrypt';

const LoginController = async (req, res) => { 
    try { 
        const exists = await Account.find({ email: req.body.email });
        if (!exists[0]) res.json({ error: "Email address or password is invalid"});
        else {
            const user = await Account.findOne({ email: req.body.email });
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) console.log(err);
                else if (result) res.status(200).json(user);
                else res.json({ error: "Invalid email or password." });
            });
        }
    } catch (error) { 
        res.status(400).json({ error: "Something went wrong!"});
    }
}

export default LoginController;