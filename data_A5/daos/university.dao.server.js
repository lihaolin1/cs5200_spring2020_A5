
const studentModel = require('../models/student.model.server');
const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');

const studentDao = require('./student.dao.server');
const answerDao = require('./answer.dao.server');
const questionDao = require('./question.dao.server');
const assert = require('assert');

const {createStudent} = require('./student.dao.server');
const {createQuestion} = require('./question.dao.server');
const {answerQuestion} = require('./answer.dao.server');
const {findStudentById} = require('./student.dao.server');
const {findQuestionById} = require('./question.dao.server');

var async = require('async');

async function truncateDatabase(){
 
    answerModel.deleteMany({}, (err) => { //deleteMany
        if(err){
            console.log(err);
        }
        else{
            console.log('Answer delete!');
        }
    });
	
    questionModel.deleteMany({},(err)=> { //deleteMany
        if(err){
            console.log(err);
        }
        else{
            console.log('Question delete!');
        }
    });
	
    studentModel.deleteMany({}, (err) =>{ //deleteMany
        if(err){
            console.log(err);
        }
        else{
            console.log('student delete!');	
        }
    });
 
};

async function populateDatabase(){
	//create student
	const Alice = {_id:123, firstName:'Alice', lastName: 'Wonderland', username: 'alice', password:'alice', gradYear:2020, scholarship: 15000};
	const Bob = {_id:234, firstName:'Bob', lastName:'Hope', username:'bob', password:'bob', gradYear:2021, scholarship: 15000};
	//Alice.save();
	//Bob.save();
    studentDao.createStudent(Alice);
    studentDao.createStudent(Bob);
    console.log('Success create student');

    
    //createStudent(Alice);
	//createStudent(Bob);
	
	//create question
	const question_tf1 = {_id:321, question:'Is the following schema valid?', points:10, questionType:'TRUE_FALSE', isTrue: false};
	const question_tf2 = {_id:432, question:'DAO stands for Dynamic Access Object.', points:10, questionType:'TRUE_FALSE', isTrue: false};
	const question_m1 = {_id:543, question:'What does JPA stand for?',points:10, questionType:'MULTIPLE_CHOICE', choices:'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations', correct:1};
	const question_m2 = {_id:654, question:'What does ORM stand for?', points:10, questionType:'MULTIPLE_CHOICE', choices: 'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping', correct:4};
	questionDao.createQuestion(question_tf1);
	questionDao.createQuestion(question_tf2);
	questionDao.createQuestion(question_m1);
	questionDao.createQuestion(question_m2);
	//createQuestion(question_tf1);
	//createQuestion(question_tf2);
	//createQuestion(question_m1);
	//createQuestion(question_m2);
	console.log('Success create question');

	
	//create answer
	const alice_tf1 = {
	    _id:123,
	    student:123,
	    question:321,
		trueFalseAnswer:true
	};
	const alice_tf2 = {
	    _id:234,
	    studnet:123,
        question:432,
		trueFalseAnswer:false
	}
	const alice_m1 = {
	    _id:345,
	    student:123,
        question:543,
		multipleChoiceAnswer:1
	};
	const alice_m2 = {
	    _id:456,
	    student:123,
        question:654,
		multipleChoiceAnswer:2
	};
	const bob_tf1 = {
	    _id:567,
	    student:234,
        question:321,
		trueFalseAnswer:false
	};
	const bob_tf2 = {
	    _id:678,
	    student:234,
        question:432,
		trueFlaseAnswer:true
	};
	const bob_m1 = {
	    _id:789,
	    student:234,
        question:543,
		multipleChoiceAnswer:3
	};
	const bob_m2 = {
	    _id:890,
	    student:234,
        question:654,
		multipleChoiceAnswer:4
	};
    //console.log(Alice);   mongoose.type.ObjectID()
	//answerQuestion(mongoose.type.ObjectID(123), mongoose.type.ObjectID(321), alice_tf1);//123, 321,
	//answerQuestion(mongoose.type.ObjectID(123),mongoose.type.ObjectID(432), alice_tf2);//123,432
	//answerQuestion(mongoose.type.ObjectID(123),mongoose.type.ObjectID(543), alice_m1);//123,543
	//answerQuestion(mongoose.type.ObjectID(123), mongoose.type.ObjectID(654), alice_m2);//123, 654
	//answerQuestion(mongoose.type.ObjectID(234), mongoose.type.ObjectID(321), bob_tf1);//234, 321,
	//answerQuestion(mongoose.type.ObjectID(234), mongoose.type.ObjectID(432), bob_tf2);//234, 432,
	//answerQuestion(mongoose.type.ObjectID(234), mongoose.type.ObjectID(543), bob_m1);//234, 543,
	//answerQuestion(mongoose.type.ObjectID(234), mongoose.type.ObjectID(654), bob_m2);//234, 654,
//	answerQuestion(Alice._id, question_tf1._id, alice_tf1);//123, 321,
//	answerQuestion(Alice._id, question_tf2._id, alice_tf2);//123,432
//	answerQuestion(Alice._id, question_m1._id, alice_m1);//123,543
//	answerQuestion(Alice._id, question_m2._id, alice_m2);//123, 654
//    answerQuestion(Bob._id, question_tf1._id, bob_tf1);//234, 321,
//    answerQuestion(Bob._id, question_tf2._id, bob_tf2);//234, 432,
//    answerQuestion(Bob._id, question_m1._id, bob_m1);//234, 543,
//    answerQuestion(Bob._id, question_m2._id, bob_m2);//234, 654,
	answerDao.answerQuestion(123, 321, alice_tf1);
	answerDao.answerQuestion(123, 432, alice_tf2);
	answerDao.answerQuestion(123, 543, alice_m1);
	answerDao.answerQuestion(123, 654, alice_m2);
	answerDao.answerQuestion(234, 321, bob_tf1);
	answerDao.answerQuestion(234, 432, bob_tf2);
	answerDao.answerQuestion(234, 543, bob_m1);
	answerDao.answerQuestion(234, 654, bob_m2);
	//answerDao.answerQuestionTry(alice_tf1);
	//answerDao.answerQuestionTry(alice_tf2);
	//answerDao.answerQuestionTry(alice_m1);
	//answerDao.answerQuestionTry(alice_m2);
	//answerDao.answerQuestionTry(bob_tf1);
	//answerDao.answerQuestionTry(bob_tf2);
	//answerDao.answerQuestionTry(bob_m1);
	//answerDao.answerQuestionTry(bob_m2);
	console.log('Success create schema');

	await testStudentInitialCount();
	await testQuestionInitialCount();
	await testAnswerInitialCount();

	await testDeleteAnswer();
	await testDeleteQuestion();
	await testDeleteStudent();

	//await universityDao.truncateDatabase();
};

//testStudentInitialCount = () => {
//    return studentDao.findAllStudents().then(students=>{
//        console.log(students);
//        console.log('test student:',students.length);
//        assert.strictEqual(students.length,2)
//    });
//};
async function testStudentInitialCount(){
    return studentDao.findAllStudents().then(students=>{
        console.log(students);
        console.log('test student:',students.length);
        assert.strictEqual(students.length,2)
    });
};

//testStudentsInitialCount();

async function testQuestionInitialCount(){
    return questionDao.findAllQuestions().then(questions=>{
        console.log(questions);
        console.log('test question:',questions.length);
        assert.strictEqual(questions.length,4)
    });
};

//testQuestionInitialCount();

async function testAnswerInitialCount(){
    return answerDao.findAllAnswers().then(answers=>{
        console.log(answers);
        console.log('test answer:', answers.length);
        assert.strictEqual(answers.length,8)
    });
};

//testAnswerInitialCount();

async function testDeleteAnswer(){
    /*answerDao.deleteAnswer(890).then(() =>answerDao.findAllAnswers()).then(answers=>{
        console.log(answers);
        console.log('find all answers:', answers.length);
        assert.strictEqual(answers.length,8)
    }).then(() =>
    answerDao.findAnswersByStudent(234)).then(answerbob =>{
        console.log(answerbob);
        console.log('find answers by studnet:', answerbob.length);
        assert.strictEqual(answerbob.length, 4)
    });*/
    answerDao.deleteAnswer(890);
    answerDao.findAllAnswers().then(answers=>{
        console.log(answers);
        console.log('find all answers after delete:', answers.length);
        assert.strictEqual(answers.length,7)
    });
    answerDao.findAnswersByStudent(234).then(answerbob =>{
        console.log(answerbob);
        console.log('find answers by studnet Bob after delete:', answerbob.length);
        assert.strictEqual(answerbob.length, 3)
    });
};

//testDeleteAnswer();

async function testDeleteQuestion(){
    /*questionDao.deleteQuestion(321)
        .then(() =>questionDao.findAllQuestions())
        .then(questions => {
            console.log(questions);
            console.log('delete question:', questions.length);
            assert.strictEqual(questions.length, 4)})*/
    questionDao.deleteQuestion(321);
    questionDao.findAllQuestions()
        .then(questions => {
            console.log(questions);
            console.log('delete question:', questions.length);
            assert.strictEqual(questions.length, 3)});
    //questionDao.deleteQuestion(321);
    //return questionDao.findAllQuestions().then(questions=>{
    //    console.log(questions);
    //    console.log('delete question:', questions.length);
    //    assert.strictEqual(questions.length,3)
    //});
};

//testDeleteQuestion();

async function testDeleteStudent(){
    /*studentDao.deleteStudent(234)
        .then(() => studentDao.findAllStudents())
        .then(students =>{ 
            console.log(students);
            console.log('delete student:', students.length);
            assert.strictEqual(students.length, 2)})*/
    studentDao.deleteStudent(234);
    studentDao.findAllStudents()
        .then(students =>{ 
            console.log(students);
            console.log('delete student:', students.length);
            assert.strictEqual(students.length, 1)});
    //studentDao.deleteStudent(234);
    //return studentDao.findAllStudents().then(students=>{
    //    console.log(students);
    //    console.log('delete student:', students.length);
    //    assert.strictEqual(students.length,1)
    //});
};

module.exports = {
	truncateDatabase,
    populateDatabase,
    testStudentInitialCount,
    testQuestionInitialCount,
    testAnswerInitialCount,
    testDeleteAnswer,
    testDeleteQuestion,
    testDeleteStudent
};
