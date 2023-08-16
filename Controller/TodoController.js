const express = require('express');
const TodoSchema= require('../model/TodoSchema');
const url = require('url')
// const todo=[
//     {
//         desc:"this shubham",
//         date:"02/03/2023",
//         catogery:"school"
//     },
//     {
//         desc:"this Abhijeet",
//         date:"12/03/2023",
//         catogery:"work"
//     },
//     {
//         desc:"this Khushi",
//         date:"23/03/2023",
//         catogery:"Professional"
//     },
//     {
//         desc:"this Dinanath",
//         date:"4/03/2023",
//         catogery:"school"
//     }
// ]

// for the get data
module.exports.home = function(req, res) {
    TodoSchema.find().then(result => {
        var bool = true;
        console.log(result.length)
        if (result.length === 0) {
            console.log("inside if");
            bool = false;
        }
        return res.render('index', {
            title: "TODO APP",
            todoList: result,
            bool: bool
        });
    }).catch(err => {
        console.log("There is a problem with the get request ", err);
        return;
    });
}


// post add todo in db
module.exports.addTodo=function(req,res){
    const todo={
        desc:req.body.desc,
        date:req.body.date,
        catogery:req.body.catogery
    };
    TodoSchema.create(todo).then(result=>{
        console.log("your Todo added");
        res.redirect('back')
    }).catch(err=>{
        console.log("there is problem with Add Todo ",err);
        return
    })
   
}
 

module.exports.deleteTodo=function(req,res){
    var arr=req.query.id;
    var dataArray = arr.split(",");
    for(let i=0;i<dataArray.length;i++){
        var id=dataArray[i];
        TodoSchema.findByIdAndDelete(id).then(result=>{
        }).catch(err=>{
            console.log("There is problem with deleted if data ",i);
            return;
        })
    }
    res.redirect('back')
}