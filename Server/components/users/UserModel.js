const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    id: { type: ObjectId }, // khóa chính
    name: {
        type: String,
        require: true
    },
    email: {
        type: String, require: true, unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: { type: Number, default: 1 }
});
module.exports = mongoose.models.user || mongoose.model('user', schema);
// user -----> users