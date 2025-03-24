import express from 'express';
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', userRoutes);
app.use('/materials', uploadRoutes)

app.listen(3024, ()=>{
    console.log("server running at http://localhost:3024");
})