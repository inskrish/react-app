const express=require('express')
const path=require('path')

const app=express();
let port=5000;

const static_path=path.join(__dirname,'../public')
app.use(express.static(static_path))

app.set("view engine","hbs")

app.get("",(req,res)=>{
res.render("index");
})


// app.get("/",(req,res)=>{
// res.send("hi");
// })


app.listen(port,()=>{
    console.log("running");
})