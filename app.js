const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
var blood=Mongoose.model("bloods",
new Mongoose.Schema({
    name:String,
    address:String,
    bloodgroup:String,
    mobile:String,
    username:String,
    password:String
}
))
Mongoose.connect("mongodb+srv://mzcbook:807826@cluster0.2sbk9.mongodb.net/bloodDb")

app.post("/api/bloodmanage",(req,res)=>{
var  data=req.body

let bloodbk=new blood(data)
 bloodbk.save((error,data)=>{
     if(error)
     {
         res.send({"status":"error","data":error})
     }
     else
     {
         res.send({"status":"success","data":data})
     }

 })

})
app.get("/api/bloodmanage",(req,res)=>{
    res.send("welcome")
})
app.listen(4000,()=>{
    console.log("server running")
})