const router =require('express').Router();

let courses_model=require('../models/course');

router.get('/',(req,res)=>{
    res.send('Courses');
});


router.get('/all',async (req,res)=>{
    let courses=await courses_model.find({});
    console.log(courses);
    let ret=[];
    for(let course of courses){
        let obj={};
        obj.courseid=course.courseid;
        obj.title=course.title;
        obj.description=course.description;
        obj.modules_count=course.modules.length;
        ret.push(obj);
    }
    res.json(ret);
});
router.get("/:courseid",async (req,res)=>{
    let courseid=req.params.courseid;
    let course=await courses_model.findOne({courseid:courseid}).populate('modules');
    let ret={};
    if(course){
        ret.courseid=course.courseid;
        ret.modules=course.modules;
        res.json(ret);
    }
    else{
        res.json({message:'Course not found'});
    }
});


module.exports=router;  