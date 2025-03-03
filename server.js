const express=require('express');
const app=express();
const db=require('./db')
const bodyparser=require('body-parser')
app.use(bodyparser.json())

app.get('/',function(req,res){
    res.send('Welcome');
})

//Import the router file
const personRoutes=require('./routes/personRoutes.js')
const menuItemRoutes=require('./routes/menuItemRoutes.js')

//use the routers
app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes)

app.listen(3000,()=>{
    console.log("listening")
});
