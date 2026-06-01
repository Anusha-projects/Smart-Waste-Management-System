const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    image:{
        type:String,
        default:""
    },

    location:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:[
            "Pending",
            "Approved",
            "Rejected"
        ],
        default:"Pending"
    },

    rewardPoints:{
        type:Number,
        default:50
    }

},
{
    timestamps:true
});

module.exports =
mongoose.model("Report",reportSchema);