const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Shubham:369silent@cluster0.zy4qbxi.mongodb.net/?retryWrites=true&w=majority');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"There is problem with connection"))
db.once('open',function(){
    console.log("Connection done...")
})