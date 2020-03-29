const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');
const quizWidgetSchema = mongoose.Schema({
 questions: [{
    type: mongoose.Schema.Types.ObjectID,
    ref: 'QuestionModel'
    }]
}, {collection: 'quizzes'});

module.exports = quizWidgetSchema;
