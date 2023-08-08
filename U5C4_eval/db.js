const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/newsApp");

const NewSchema = new mongoose.Schema({
    Title: {type : String, required: true},
    Description: String,
    Date: Date,
    Author: {type: String, enum: ["Mathias Newburn", "Rey Rutty", "Magdaia Shellard", "Kathrine Faichney"]},
    Location: {type: String, enum:["London", "New York"] },
    tags: { type: String, enum: ["politics", "crime", "tech", "sports","health"]},
    total_views:{type:Number,default:1},
    category: {type:String, enum: ["trending", "top", "new"]}
})

const New = mongoose.model("new",NewSchema);
module.exports = {New, connection};