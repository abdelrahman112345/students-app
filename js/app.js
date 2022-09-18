//Yargs
const yargs = require ('yargs')
const students = require ('./students')
// Add Student
yargs.command({
    command: 'add',
    describe: 'Add Student',
    builder: {
        id: {
            describe: 'This is id description in add student',
            type: 'number',
            demandOption: true 
        },
        name: {
            describe: 'This is name description in add student',
            type: 'string',
            demandOption: true 
        },
        degree: {
            describe: 'This is degree description in add student',
            type: 'array',
            demandOption: true
        },
        comment: {
            describe: 'This is comment description in add student',
            type: 'string'
        }
    },
    handler: () => {
        students.addStudent(yargs.argv.id, yargs.argv.name, yargs.argv.degree, yargs.argv.comment)
    }
})
// Update Student
yargs.command({
    command: 'update',
    describe: 'Update Student',
    builder: {
        id: {
            describe: 'This is id description in update student',
            type: 'number',
            demandOption: true 
        },
        name: {
            describe: 'This is name description in update student',
            type: 'string',
            demandOption: true 
        },
        degree: {
            describe: 'This is degree description in update student',
            type: 'array',
            demandOption: true 
        },
        comment: {
            describe: 'This is comment description in update student',
            type: 'string'
        }
    },
    handler: () => {
        students.updateStudent(yargs.argv.id, yargs.argv.name, yargs.argv.degree, yargs.argv.comment)
    }
})
// Delete Student
yargs.command({
    command: 'delete',
    describe: 'delete student',
    builder: {
        id: {
            describe: 'This is id description in delete student',
            type: 'number',
            demandOption: true
        }
    },
    handler: () => {
        students.deleteStudent(yargs.argv.id)
    }
})
// Read Student 
yargs.command({
    command: 'read',
    describe: 'read student',
    builder: {
        id: {
            describe: 'This is id description in read student',
            type: 'number',
            demandOption: true
        }
    },
    handler: () => {
        students.readStudent(yargs.argv.id)
    }
})
// List Students
yargs.command({
    command: 'list',
    describe: 'list students',
    handler: () => {
        students.listStudents()
    }
})
// To Work Yargs
yargs.parse();
