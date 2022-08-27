const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id : Number,
    author_name: String,
    age: Number,
    address: String

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)


// _id: ObjectId("61951bfa4d9fe0d34da86829"),
// name: "Sabiha Khan",
// balance:100, // Default balance at user registration is 100
// address:"New delhi",
// age: 90,
//  gender: “female” // Allowed values are - “male”, “female”, “other”
// isFreeAppUser: false // Default false value.
// }