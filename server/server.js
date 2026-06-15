import express from "express";
import cors from "cors";
import "./db.js";

import Contact from "./models/Contact.js";
const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact",async(req,res)=>{
    try{
      const contact=new Contact(req.body);
      await contact.save();
      res.status(201).json({message:"Data saved"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

app.listen(5000,()=>{
console.log("Server Running on port 5000")
});