import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.listen(3024, ()=>{
    console.log("server running at http://localhost:3024");
})