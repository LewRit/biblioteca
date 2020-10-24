const express=require('express')
const fetch=require('node-fetch')
const router=express.Router()


router.get('/',async(req,res)=>{
    const { author,title }=req.body;
    const params=`${title ? "title=" + title : ''}${author ? "&author=" + author : ''}`;
    fetch(`http://openlibrary.org/search.json?${params}&limit=10`)
    .then(result=>result.json())
    .then(data=>res.json(data))
    // .catch(err=> console.log(err))    
});
module.exports=router




// fetch('https://api.github.com/users/github')
// .then(res => res.json())
// .then(json => console.log(json));