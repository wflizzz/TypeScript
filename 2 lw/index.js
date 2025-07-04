//создать типы/интерфейсы для следующих массивов/объектов:
var studentsFilter = function (students, group) {
    return students.filter(function (student) { return student.group === group; });
};
var marksFilter = function (students, mark) {
    return students.filter(function (student) { return student.marks.some(function (m) { return m.mark >= mark; }); });
};
var deleteStudent = function (students, id) {
    return students.filter(function (student) { return student.id !== id; });
};
var students = [
    { id: 1, name: "A", group: 3, marks: [{ subject: "Math", mark: 7, done: true }] },
    { id: 2, name: "N", group: 3, marks: [{ subject: "Algebra", mark: 9, done: false }] },
    { id: 3, name: "M", group: 5, marks: [{ subject: "Science", mark: 5, done: true }] },
];
console.log("Фильтр студентов по группе 3:", studentsFilter(students, 3));
console.log("Студенты с оценкой >= 8:", marksFilter(students, 8));
console.log("Удаление студента с id = 2:", deleteStudent(students, 2));
