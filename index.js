import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/UserRoutes.js';
import taskRoutes from './routes/TaskRoutes.js';
import dayPlanRoutes from './routes/DayPlanRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const URI=process.env.URI;
mongoose.connect(URI);


const app=express();
const PORT=3000;
app.use(bodyParser());
app.use(cors());
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/dayPlans', dayPlanRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
