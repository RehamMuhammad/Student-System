/*****************************************************************************************************************************************************/
//Requiring the file system module for adding a new Json file to save & read data from it
const fs = require("fs");

//Requiring the chalk module for Styling our terminal messages
const chalk = require("chalk");

//The main styles in our terminal

const success = chalk.bold.black.bgGreen;
const warning = chalk.black.bgRed;
const viewId = chalk.black.bgMagenta;
const viewName = chalk.black.bgYellow;
const viewGrade = chalk.black.bgRedBright;
const viewComments = chalk.black.bgCyanBright;

/*****************************************************************************************************************************************************/
//Add New Students

const addStudents = (id, studentName, grade, comment) => {
  const students = getAllStudents();
  const duplicateStudent = students.filter((student) => {
    return student.id === id;
  });

  if (duplicateStudent.length === 0) {
    students.push({
      id,
      studentName,
      grade,
      comment,
    });
    saveStudents(students);
    console.log(success("New Student has been added successfully"));
  } else {
    console.log(warning("You are trying to add an existing id number"));
  }
};

/*****************************************************************************************************************************************************/
//Delete an existing Student

const deleteStudent = (id) => {
  const students = getAllStudents();
  const studentsToSave = students.filter((student) => {
    return student.id !== id;
  });
  saveStudents(studentsToSave);
  console.log(success("You have been deleted the Student Successfully"));
};

/*****************************************************************************************************************************************************/
//Viewing an existing Student information

const viewStudent = (id) => {
  const students = getAllStudents();
  const studentToFind = students.find((student) => {
    return student.id == id;
  });
  if (studentToFind) {
    console.log(studentToFind); // I have a question here related to weather app also remember
    console.log(viewId(studentToFind.id));
    console.log(viewName(studentToFind.studentName));
    console.log(viewGrade(studentToFind.grade));
    console.log(viewComments(studentToFind.comment));
  } else {
    console.log(warning("Sorry we can't find Student with this id"));
  }
};

/*****************************************************************************************************************************************************/
//Viewing all existing Students information

const viewAllStudents = () => {
  const students = getAllStudents();
  students != null
    ? students.forEach((student) => {
        console.log(student);
        console.log(viewId(student.id));
        console.log(viewName(student.studentName));
        console.log(viewGrade(student.grade));
        console.log(viewComments(student.comment));
      })
    : console.log("We don't have any Students to show right now");
};

/*****************************************************************************************************************************************************/
//common functions

//Getting all Students information

const getAllStudents = () => {
  try {
    const studentJson = fs.readFileSync("students.json").toString();
    return JSON.parse(studentJson);
  } catch (e) {
    return [];
  }
};

//Saving all Students information after any changes

const saveStudents = (students) => {
  const newStudents = JSON.stringify(students);
  fs.writeFileSync("students.json", newStudents);
};

module.exports = { addStudents, deleteStudent, viewStudent, viewAllStudents };

/*****************************************************************************************************************************************************/
