const express=require('express');   
const {databaseconnect}=require('./dbconfig');
const {main}=require('./createsampledata');
const cors=require('cors');
databaseconnect();
// import all models
main();

const coursesrouter=require('./routes/courses');

const app=express();    
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use('/api/courses',coursesrouter);



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});