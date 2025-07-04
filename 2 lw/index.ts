//создать типы/интерфейсы для следующих массивов/объектов:

//1.
/*interface Student {
    //type Student = {
    id: number;
    name: string;
    group: number;
}

const arrays: Student[] = [
    {id: 1, name: 'Vasya', group: 10},
    {id:2, name: 'Ivan', group: 11},
    {id:3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

//2
interface CarsTypes {
    //type CarsType ={
    manufacturer: string;
    model: string;
}

let cars: CarsTypes = {
    manufacturer: "manufacturer",
    model: "model"
};


//3
interface CarsType {
    //type CarsType ={
    /* manufacturer?: string;
    model?: string;*/
    /*manufacturer: string;
    model: string;
};
type ArrayCarsType = {
    cars: CarsType[];
}
/*const car1: CarsType = {}
car1.manufacturer = "manufacturer";
car1.model = 'model';*/
/*const cars1: CarsType = { manufacturer: "manufacturer", model: "model" };
const cars2: CarsType = { manufacturer: "manufacturer", model: "model" };

/*const car2: CarsType = {};
car2.manufacturer = "manufacturer";
car2.model = 'model';*/

/*const arrayCar: Array<ArrayCarsType> = [{
    cars: [cars1, cars2]
}];*/

//4
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type DoneType = boolean;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type MarkType = {
    subject: string;
    mark: MarkFilterType;
    done: DoneType;
};

type StudentType = {
    id: number;
    name: string;
    group: GroupFilterType;
    marks: MarkType[];
};

type GroupType = {
    students: StudentType[];
};

const studentsFilters = (students: StudentType[], group: GroupFilterType): StudentType[] => {
    return students.filter(student => student.group === group);
};
const marksFilters = (students: StudentType[], mark: MarkFilterType): StudentType[] => {
    return students.filter(student => student.marks.some(m => m.mark >= mark));
};

const deleteStudents = (students: StudentType[], id: number): StudentType[] => {
    return students.filter(student => student.id !== id);
};
const student: StudentType[] = [
    { id: 1, name: "A", group: 3, marks: [{ subject: "M", mark: 7, done: true }] },
    { id: 2, name: "N", group: 3, marks: [{ subject: "A", mark: 9, done: false }] },
    { id: 3, name: "M", group: 5, marks: [{ subject: "S", mark: 5, done: true }] },
];

console.log("Фильтр студентов по группе 3:", studentsFilters(student, 3));
console.log("Студенты с оценкой >= 8:", marksFilters(student, 8));
console.log("Удаление студента с id = 2:", deleteStudents(student, 2));




