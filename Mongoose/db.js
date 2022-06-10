const mongoose = require("mongoose");
const {Schema, model } = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/IMDB");

const MovieSchema= new Schema({
    title: {type : String, required: true},
    rating: Number,
    releaseDate : Date,
    earning: { type: Number, default: 1000, min: 0, max: 10000 },
    caste: {type: [String] },
    language: { type: String, enum: ["English", "Hindi", "Bengali"]},

})


const Movie = model("movie", MovieSchema);
module.exports= {Movie, connection}



