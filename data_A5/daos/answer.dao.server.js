const answerModel = require('../models/answer.model.server')
findAllAnswers = ()=> answerModel.find();
findAnswerById = (answerId) => answerModel.findById(answerId);
findAnswersByQuestion = (questionId) => answerModel.find({question:questionId});
findAnswersByStudent = (studentId) => answerModel.find({student:studentId});
deleteAnswer = (answerId) => answerModel.deleteOne({ _id: answerId }, function (err) {
    // if no error, your models are removed
});//remove({_id:answerId});
answerQuestion = (studentId, questionId, answer) =>{
answer.student = studentId;
answer.question = questionId;
//console.log(answer);
return answerModel.create(answer);
};
answerQuestionTry = (answer) => {
    return answerModel.create(answer);
}
module.exports = { findAllAnswers, findAnswerById, findAnswersByQuestion, findAnswersByStudent, deleteAnswer, answerQuestion, answerQuestionTry};
