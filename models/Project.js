const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    image_url: {type: String},
    votes: {
        type: Map,
        of: Number,
        default: {}
    }
})

const QuestionSchema = new Schema({
    qid:{type:Number},
    question : {type: String},
    option: [String]
});

const TutorialSchema = new Schema({
    text: {type: String},
    vidurl : {type: String}
});

const ProjectData = new Schema({
    project_name: {type : String, required: true},
    about: {type: String, required: true},
    category: {type: String},
    conducting_org: {type: String},
    qcategory: {type: String},
    questions: [QuestionSchema],
    ImageSet: [ImageSchema],
    tutorial : TutorialSchema
});

const PData = mongoose.model('ProjectData', ProjectData);
module.exports = PData