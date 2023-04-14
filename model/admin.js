const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    username: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
});
const model = mongoose.model("Admin", messageSchema);

module.exports = model