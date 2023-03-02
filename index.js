import express from 'express'
import indexRoutes from './routes/index.routes.js'
import cors from 'cors'
const app=express();

app.use(cors())
app.use(express.json())
app.use(indexRoutes)


 app.get(("/"),(req,res)=>{
     res.send("hello world!");
 })



app.listen(3000);
console.log(`servidor corriendo${3000}`)