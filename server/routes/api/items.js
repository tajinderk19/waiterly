const express = require('express');
const router = express.Router();

// Item Model
const User = require('../../models/user-model');

// @route   GET api/items
// @desc    Get All Items

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/clients', (req, res) => {
  const { body } = req;
  const { name, email } = body;
  if(!username){
    return res.end({
      success:false,
      message:'error'
    });
  }
  if(!email){
    return res.end({
      success:false,
      message:'error'
    });
  }
  
  email = email.toLowerCase();
  User.find({
    email: email }, (err, previousUsers) =>
{
  if(err){
    return res.end({
      success:false,
      message:'error'
    });
  }
  else if(previousUsers.length > 0){
    return res.end({
      success:false,
      message:'error'
    });
  }
const newUser = new User();
newUser.email = email;
newUser.name = name;
newUser.save((err, user)=>{
  if(err){
    return res.end({
      success:false,
      message:'error'
    });
  }
    return res.end({
      success:true,
      message:'error'
    })
}) });
});




module.exports = router;
