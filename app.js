const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
app.use((req, res, next) => { 
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" ); 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS" ); 
    next(); });

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
var  getname=req.body.name
var getaddress=req.body.address
var getbloodgroup=req.body.bloodgroup
var getmobile=req.body.mobile
 var getusername=req.body.username
var getpassword=req.body.password
data={"name":getname,"address":getaddress,"bloodgroup":getbloodgroup,"mobile":getmobile,"username":getusername,"password":getpassword}
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
app.get("/api/viewall",(req,res)=>{
    blood.find(
        (error,data)=>{
            if(error)
     {
         res.send({"status":"error","data":error})
     }
     else
     {
         res.send({"status":"success","data":data})
     }

            
        }
    )
})
app.listen(4000,()=>{
    console.log("server running")
})