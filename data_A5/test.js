require('./db')();
const universityDao = require('./daos/university.dao.server');
const studentDao = require('./daos/student.dao.server');
const answerDao = require('./daos/answer.dao.server');
const questionDao = require('./daos/question.dao.server');
//const async = require("async");
//universityDao.truncateDatabase();
var async = require('async');

/*async.series([
    //one:  universityDao.truncateDatabase() ,
    //universityDao.truncateDatabase(),
    //function (callback) { universityDao.truncateDatabase(); },

    universityDao.populateDatabase(),
    //two: universityDao.truncateDatabase(),

    universityDao.testStudentInitialCount(),//universityDao.testDeleteStudent(),
    //function (callback) { universityDao.testStudentInitialCount(); },

    universityDao.testQuestionInitialCount(),//universityDao.testDeleteQuestion(),
    //function (callback) { universityDao.testQuestionInitialCount(); },

    universityDao.testAnswerInitialCount(),//universityDao.testDeleteAnswer(),
    //function (callback) { universityDao.testAnswerInitialCount(); },

    universityDao.testDeleteQuestion(),//universityDao.testQuestionInitialCount(),

    //function (callback) { universityDao.testDeleteQuestion(); },
    universityDao.testDeleteAnswer(),//universityDao.testAnswerInitialCount(),

    //function (callback) { universityDao.testDeleteAnswer(); },

    universityDao.testDeleteStudent(),//universityDao.testStudentInitialCount()
    //function (callback) { universityDao.testDeleteStudent(); }

    //nine: universityDao.truncateDatabase(),
    //nine: universityDao.populateDatabase()
]);*/


//universityDao.truncateDatabase();

universityDao.populateDatabase();
//universityDao.testStudentInitialCount();
//universityDao.testQuestionInitialCount();
//universityDao.testAnswerInitialCount();
//universityDao.testDeleteQuestion();
//universityDao.testDeleteAnswer();
//universityDao.testDeleteStudent();