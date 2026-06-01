const Reward =
require("../models/Reward");

exports.redeemReward =
async(req,res)=>{

try{

const {
userId,
points,
amount,
utr
}
=
req.body;

const reward =
await Reward.create({

userId,
points,
amount,
utr

});

res.json({

success:true,
message:"Redeem Request Sent"

});

}
catch(error){

res.status(500).json({

message:error.message

});

}

};