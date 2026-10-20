const mongoose =require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type: string,
        required: true,
        unique: true,
    },
    createdAt:{
        type: date,
        default: date.now,
        expires: 86400 //24 houres in sec
    }
});

module.exports= mongoose.model('blacklistToken',blacklistTokenSschema);