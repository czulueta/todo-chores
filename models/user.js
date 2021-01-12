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
        objectId: oid,
    },
    pastChores: {
        objectId: Array
    }

})