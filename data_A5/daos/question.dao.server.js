const questionModel = require('../models/question.model.server');
createQuestion = (question) => questionModel.create(question);
findAllQuestions = () => questionModel.find();
findQuestionById = (questionId) => questionModel.findById(questionId);
deleteQuestion = (questionId) => questionModel.deleteOne({ _id: questionId }, function (err) {
    // if no error, your models are removed
});//remove({_id:questionId});
module.exports = {createQuestion, findAllQuestions, findQuestionById, deleteQuestion};
