import express from "express";
import  "dotenv/config";
import cors from "cors";
import http from "http";
import ConnectDB from "./src/lib/Db.js";
const PORT = process.env.PORT || 9090;

const app = express();

//http beacuse socket.io support http server
const server = http.createServer(app);

app.use(express.json({limit : "4mb"}));
app.use(cors())

app.use("/api/status",(req,res)=>{
    res.send("server live!!")
})

server.listen(PORT , ()=>{
    console.log(PORT+" Live!!");
    
})

await ConnectDB()

