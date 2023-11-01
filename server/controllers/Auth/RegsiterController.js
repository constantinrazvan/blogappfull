import mongoose from 'mongoose';
import Account from '../../models/Account';
import bcrypt from 'bcrypt';

const RegisterController = ( req, res ) => {
    try {
        const exists = Account.find({ email: req.body.email });

        if(email[0]) res.status(400).json({ error : "Email address already in use" });

        else { 
            const salts = 10; 
            bcrypt.hash(req.body.password, salts, (hash) => {
                const newAccount = new Account({
                    name: req.body.name, 
                    email: req.body.email, 
                    password: hash
                });

                const savedAccount = newAccount.save();
                res.status(200).json({ message: "Succesfully registered!"})
            });
        }
    } catch (error) { 
        res.status(400).jsong({ error: "Something went wrong! Try again!" });
    }

}

module.export = [ RegisterController ];