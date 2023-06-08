import express from "express";
import employees from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express();

app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Hello Client")
})

//routes express
app.use(indexRoutes);
app.use('/api', employees);

app.use((req, res, next)=>{
    res.status(404).json({
        message:'Endpoint not found'
    })
})

export default app;