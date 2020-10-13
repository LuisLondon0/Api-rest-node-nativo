/** packages */
const mongoose = require("mongoose");

/** Schema creation */
const studentGroupSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    },
    dean_name:{
        type: "String",
        required: true
    }
});

/** Schema exportation */
module.exports = studentGroupSchema;