const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const formRoutes = require('./routes/form')

const corsOptions = {
    origin : '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const mongoURI = `mongodb+srv://saxenay117:mongoDB2024%23@cluster1.unzxb3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/form/', formRoutes);

app.get('/', (req,res)=>{
    res.send("Express on Vercel");
})

const PORT = 8080;
app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));


