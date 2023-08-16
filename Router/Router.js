const express= require('express');
const todoHome= require('../Controller/TodoController')
const router=express.Router();
router.get('/todoHome',todoHome.home)
router.post('/saveData',todoHome.addTodo);
router.get('/delete/*',todoHome.deleteTodo);
   
console.log("router loaded");

module.exports=router;