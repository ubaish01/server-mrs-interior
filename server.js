import app from "./app.js";


app.listen(process.env.PORT,()=>{
    console.log("Working on port "+process.env.PORT);
})

