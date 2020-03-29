const studentModel = require('../models/student.model.server');
createStudent = (student) => studentModel.create(student);
findAllStudents = () => studentModel.find();
findStudentById = (studentId) => studentModel.findById(studentId);
deleteStudent = (studentId) => studentModel.deleteOne({ _id: studentId }, function (err) {
    // if no error, your models are removed
});//remove({_id: studentId});
module.exports = {createStudent, findAllStudents, findStudentById, deleteStudent};
