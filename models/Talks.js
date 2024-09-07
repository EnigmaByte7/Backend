const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TalkSchema = new Schema({
    content: [String]
})

const TData = mongoose.model('TData', TalkSchema)
module.exports = TData;