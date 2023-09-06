const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');
 MONGODB_CONNECT_URI='mongodb+srv://deploydata720:EFV8AxcsXrW3dZM2@cluster0.hi7pxnf.mongodb.net/?retryWrites=true&w=majority'
 mongoose.connect(URL_MONGODB);
 

const db=mongoose.connection;

db.on('error',console.error.bind(console,"There is problem with connection"))
db.once('open',function(){
    console.log("Connection done...")
})