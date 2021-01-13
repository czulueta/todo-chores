const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    points: {
        type: Number,
    },
    currentChores: {
        type: Schema.Types.ObjectId,
        ref: "Chores"
    },
    pastChores: {
        type: Schema.Types.ObjectId,
        ref: "Chores"
    }

})
module.exports = mongoose.model("User", userSchema)