const mongoose = require("mongoose")
const Schema = mongoose.Schema

const choreSchema = new Schema ({
    choreName: {
        type: String,
        required: true
    },
    choreRequirements: {
        type: String,
    }
})
module.exports = mongoose.model("Chore", choreSchema )