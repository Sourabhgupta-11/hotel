const express=require('express')
const router=express.Router()
const MenuItem=require('./../models/menuItem.js')


router.post('/', async (req,res)=>{
    try{
    const data=req.body;
    const newMenu=new MenuItem(data);
    const response=await newMenu.save();
    console.log("Menu Saved");
    res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"Internal Server Error"})
    }

})



router.get('/', async (req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log("Menu data fetched")
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"Internal Server Error"})
    }
})

router.put('/:id', async (req,res)=>{
    try{
    const menuId=req.params.id;
    const updatedData=req.body;

    const response=await Person.findByIdAndUpdate(menuId,updatedData,{
        new: true,
        runValidators: true
    })
    if(!response){
        return res.status(404).json({error:"Menu not found"})
    }
    res.status(200).json(response);
    }
    catch(err){
        res.status(500).json({error:"Internal server error"})
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const menuId=req.params.id;
        const response=await MenuItem.findByIdAndDelete(menuId)
        if(!response){
        res.status(404).json({error:"Menu not found"})
        }
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json({error:"Internal Server Error"})
    }
})


module.exports=router