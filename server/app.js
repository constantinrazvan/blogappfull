import mongoose from 'mongoose';
import express from 'express';

const app = express(); 
const port = process.env.PORT || 4300;
app.use(express.json());
