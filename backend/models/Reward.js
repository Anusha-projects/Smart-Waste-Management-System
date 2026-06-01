const mongoose =
require("mongoose");

const rewardSchema =
new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

points:Number,

amount:Number,

utr:String,

status:{
type:String,
default:"Pending"
}

},
{
timestamps:true
});

module.exports =
mongoose.model(
"Reward",
rewardSchema
);