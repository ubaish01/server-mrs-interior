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

app.get("/",(req,res)=>{
    res.send(`Bckend working fine click <a href=${process.env.FRONTEND_URL}>Here</a> to go to frontend`)
})

app.use("/api/v1",otherRoutes)

export default app

app.use(ErrorMiddleware)