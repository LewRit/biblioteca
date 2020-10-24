const express=require('express');
const auth=express.Router();
const passport=require('passport')

//callback function
auth.get('/auth/github/callback',passport.authenticate('github',{failureRedirect:'/'}),(req,res)=>{
    res.redirect('/')
})
// route to use to login
auth.get('/auth/github', passport.authenticate('github'))
// route to use to logout
auth.get('/logout', (req,res)=>{
    req.logout()
    res.redirect('/');
})
module.exports=auth