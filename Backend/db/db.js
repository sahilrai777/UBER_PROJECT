const mongoose = require('mongoose');


function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser:
        true, useUnifiedTopology: true} 
    ).then(()=>{
            console.log('connect to DB');
        }
    ).catch(error=> console.error(error));
}

module.exports=connectToDb;