const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    id: { type: ObjectId }, // khóa chính
    name: {
        type: String, // kiểu dữ liệu
        trim: true, // bỏ khoảng trắng 2 đầu
        default: 'No name' // giá trị mặc định
    },
    price: {type: Number},
    quantity: {type: Number},
    image:  {type: String},
    category: {type: ObjectId, ref: 'category'} // khoas ngoai
});
module.exports = mongoose.models.product || mongoose.model('product', schema);
