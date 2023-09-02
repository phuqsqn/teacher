const mongoose =require("mongoose")

const classesSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    lecture:{
        type:String,
        require:true,
    },
    opening:{
        type:String,
        require:true,
    },
    classroom:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    teacher: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "teacher",

    }
},
{
    versionKey:false,
})
module.exports = mongoose.model("classes",classesSchema)
