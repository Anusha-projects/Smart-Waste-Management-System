const Report = require("../models/Report");

exports.createReport = async(req,res)=>{

try{

const {
location,
description,
userId
} = req.body;

const report =
await Report.create({

userId,
location,
description

});

res.status(201).json({

success:true,
message:"Report Submitted",

report

});

}
catch(error){

res.status(500).json({

message:error.message

});

}

};