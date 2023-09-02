const mongoose =require("mongoose")

const teacherSchema = mongoose.Schema({
    fullname:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    dob:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
        unique:true
    },
    description:{
        type:String,
        require:true,
    }
},
{
    versionKey:false,
})
module.exports = mongoose.model("teacher",teacherSchema)
