const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
	_id: Number,
	username:String,
	firstName:String,
	lastName:String,
	gradYear: Number,
	scholarship:Number
	},{collection:'students'});
module.exports = studentSchema;
