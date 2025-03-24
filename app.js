import express from 'express';
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import process from 'process';
import { connectMySQL } from './config/mysql.js';
const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', userRoutes);
app.use('/materials', uploadRoutes)

const startServer = async () => {
    await connectMySQL();

    app.get('/', (req, res) => {
        res.send('welcome to Courseware Cloud')
    })

    app.listen(port, ()=>{
        console.log(`server running at http://localhost:${port}`);
})
}

startServer()