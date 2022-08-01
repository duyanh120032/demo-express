const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    address:Object,
    phone: String,
    website: String,
    company: Object
})

module.exports = mongoose.model('User', userSchema);
