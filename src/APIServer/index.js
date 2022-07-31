const express=require("express");
const fs=require("fs");


let app=express();
app.use(express.json());
app.get("/",(req,res)=>
{
    const data=fs.readFileSync('./db.json',"utf-8");
    const parsedData=JSON.parse(data);
    const todos=parsedData.todos;
    res.send(todos);
})

app.post("/",(req,res)=>
{
    const postData=req.body;
    const data=fs.readFileSync('./db.json',"utf-8");
    const parsedData=JSON.parse(data);
    const todos=parsedData.todos;
    const newtodos=[...todos,postData];
    parsedData.todos=newtodos;
    const newStringData=JSON.stringify(parsedData);
    fs.writeFileSync('./db.json',newStringData,"utf-8");
    res.send("yes");
})

app.delete("/",(req,res)=>
{
   const {id}=req.body;
   const data=fs.readFileSync('./db.json',"utf-8");
   const parsedData=JSON.parse(data);
   const todos=parsedData.todos;
   const newtodos=todos.filter((el)=>{return el.id!==id});
   parsedData.todos=newtodos;
   const newStringData=JSON.stringify(parsedData);
   fs.writeFileSync('./db.json',newStringData,"utf-8");
   res.send("Deleted");

})

app.put("/",(req,res)=>
{
    const putReq=req.body;
    const data=fs.readFileSync("./db.json","utf-8");
    const parsedData=JSON.parse(data);
    const todos=parsedData.todos;
    const newtodos=todos.map((el)=>
    {
        if(el.id===putReq.id)
        {
            return putReq;
        }
        else{
            return el;
        }
    })
    parsedData.todos=newtodos;
    const newStringData=JSON.stringify(parsedData);
    fs.writeFileSync("./db.json",newStringData,"utf-8");
    res.send("PutDone")
})

app.listen(5000);