// Core Module File System
const fs = require ('fs')
// Create Add Student Function 
const addStudent = (id, name, degree, comment) => {
    const students = loadStudents()
    const duplicateId = students.filter ((el) => {
        return el.id === id
    })
    if (duplicateId.length == 0) {
        let sum = 0
        for (i = 0; i < degree.length; i++) {
            sum += degree[i]
        }
        students.push({
            id,
            name,
            degree,
            total: sum,
            comment
        })
        saveStudents(students)
    } else {
        console.log ('Error duplicate id')
    }
}
const loadStudents = () => {
    try{
        const data = fs.readFileSync('students.json').toString()
        return JSON.parse(data)
    }
    catch(e) {
        return []
    }
}
const saveStudents = (data) => {
    const saveData = JSON.stringify(data)
    fs.writeFileSync('students.json', saveData)
}
// Create Update Student Function
const updateStudent = (id, name, degree, comment) => {
    const students = loadStudents()
    const studentToUpdate = students.find((el) => {
        return el.id === id
    })
    if (studentToUpdate) {
        studentToUpdate.id = id
        studentToUpdate.name = name
        studentToUpdate.degree = degree
        studentToUpdate.comment = comment
        saveStudents(students)
    } else {
        console.log('This Student Not Found')
    }
}
// Create Delete Student Function
const deleteStudent = (id) => {
    const students = loadStudents()
    studentsToKeep = students.filter ((el) => {
        return el.id !== id
        /*
        6 !== 6 f
        6 !== 1 t

        */
    })
    if (studentsToKeep.length !== students.length) {
        saveStudents(studentsToKeep)
        console.log('Operation is siccess')
    } else {
        console.log('This Student Not found')
    }
}
// Create Read Student Function
const readStudent = (id) => {
    const students = loadStudents()
    const studentToRead = students.find ((el) => {
        return el.id === id
    })
    if (studentToRead) {
        console.log(studentToRead.name)
        console.log(studentToRead.degree)
    } else {
        console.log('This Student Not Found')
    }
}
// Create List Students Function 
const listStudents = () => {
    const students = loadStudents()
    students.forEach((el) => {
        console.log(el.name)
        console.log(el.degree)
    })
}
// Export 
module.exports = {
    addStudent,    // Short Hand
    updateStudent,
    deleteStudent,
    readStudent,
    listStudents
}