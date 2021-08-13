/*****************************************************************************************************************************************************/
//Requiring yargs (the main module to execute the CRUD commands)

const yargs = require("yargs");

//Requiring Our Student System logic

const students = require("./students");

/*****************************************************************************************************************************************************/
//The add command for the addition of new students

yargs.command({
  command: "add",
  describe: "The addition of New Students",
  builder: {
    // id is a unique number & it's mandatory
    id: {
      describe: "The unique number for each student",
      demandOption: true,
      type: "number",
    },

    // name is a string & it's mandatory
    name: {
      describe: "The name of each student",
      demandOption: true,
      type: "string",
    },

    // grade is a number & it's mandatory
    grade: {
      describe: "The grade of each student",
      demandOption: true,
      type: "number",
    },

    // comment is a string & it's optional
    comment: {
      describe: "if any student has comments",
      demandOption: false,
      type: "string",
    },
  },
  handler: (argv) => {
    students.addStudents(argv.id, argv.name, argv.grade, argv.comment);
  },
});

/*****************************************************************************************************************************************************/
//The Delete command to delete any existing student from our system

yargs.command({
  command: "delete",
  describe: "The deletion of any existing student",
  builder: {
    //We delete students through their id number
    id: {
      describe: "The unique number for each student",
      demandOption: true,
      type: "number",
    },
  },
  handler: (argv) => {
    students.deleteStudent(argv.id);
  },
});

/*****************************************************************************************************************************************************/
//The Read command to get any existing student information

yargs.command({
  command: "read",
  describe: "getting any existing student information",
  builder: {
    //We get the students information through their id number also
    id: {
      describe: "The unique number for each student",
      demandOption: true,
      type: "number",
    },
  },
  handler: (argv) => {
    students.viewStudent(argv.id);
  },
});

/*****************************************************************************************************************************************************/
//The list command to get all existing students information

yargs.command({
  command: "list",
  describe: "getting all existing students information",
  handler: () => {
    students.viewAllStudents();
  },
});

/*****************************************************************************************************************************************************/

console.log(yargs.argv);

/*****************************************************************************************************************************************************/
