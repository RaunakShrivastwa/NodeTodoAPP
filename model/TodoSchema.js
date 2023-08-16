const mongoose = require('mongoose')

const TodoData=mongoose.Schema({
    desc:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    catogery:{
        type:String,
        required:true
    }
});



const TodoSchema=mongoose.model("TodoList",TodoData);
module.exports=TodoSchema;
