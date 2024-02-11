const Member = require("../models/memberModel");
const CurrentUser = require('../models/currentUserModel');


const getCurrentUser = async(req, res) =>{
  try{
    const user = await CurrentUser.find();
    res.status(200).json(user);
  }catch(err){
    res.status(500).json({err});
  }
}

const updateCurrentUser = async(req, res) =>{
  const {userid} = req.body;
  try{
    const user = await Member.findOne({userid})
    if(!user){
      res.status(404).json({message:"member not found"});
      return;
    }
    const updatedCurrentUser = await CurrentUser.findOneAndUpdate({}, { userid }, { new: true, upsert: true });
    res.status(200).json({message: "changed user", updatedCurrentUser})
  }catch(err){
    res.status(500).json({message:"error updating currentUser"});
  }
}

const addCurrentUser = async(req, res) =>{
  const {userid} = req.body;
  try{
    const currUser = await CurrentUser.create({userid});
    res.status(200).json(currUser);
  }catch(err){
    res.status(500).json({message: "error adding currentUser"});
  }
}

module.exports = { getCurrentUser, updateCurrentUser, addCurrentUser};
