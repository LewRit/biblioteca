const express=require("express")
const router=express.Router()

router.get('/',(req,res)=>{
    res.json({
        location:"HOME"
    })
});
module.exports=router;