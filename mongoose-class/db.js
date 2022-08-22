
const mongoose = require('mongoose');

const connection= mongoose.connect("mongodb://localhost:27017/user")

// const connectDb= async ()=>{
//     const conn=await connection; 
//     console.log("connection successfull to DB");

//     // const student1 = new StudentModel({
//     //     name: "Pari",
//     //     age: "22",
//     //     city: "Kolkata",
//     //     hobbies : ["Movie", "Coding"]
//     // })

//     // await student1.save()
//     // console.log("Student 1 saved");

//     const students = await StudentModel.find({city:"Pune"})
// console.log(students);

//     conn.disconnect()
// }

// connectDb()





const studentSchema= mongoose.Schema({
    name: {type: String, required: false},
    age : {type: Number, required: true},
    city: {type: String, required: true},
    hobbies: {type: [], required: true}
})

const StudentModel = mongoose.model("student", studentSchema);


module.exports = {
    connection, StudentModel
}


