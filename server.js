import cors from 'cors'
import cookieParser from 'cookie-parser';
import express, { urlencoded } from 'express';
import {config} from 'dotenv'
import ErrorMiddleware from "./middlewares/Error.js"

config({
    path:'./config/config.env'
});

const app = express()

//Using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded(
    {
        extended:true
    }
));
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
}))

//Imports and routes 
import otherRoutes from "./routes/Routes.js"

app.get("/",async(req,res)=>{
res.send("Working fine ");
})

app.get("/home",(req,res)=>{
    res.send(` Click <a href=${process.env.FRONTEND_URL}>Here</a> to go to frontend`)
})

app.use("/api/v1",otherRoutes)



app.listen(process.env.PORT,()=>{
    console.log("Working on port "+process.env.PORT);
})


app.use(ErrorMiddleware)