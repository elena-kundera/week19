//1. Создайте класс Работник, который будет иметь следующие свойства: name (имя), surname (фамилия), 
//rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод 
//getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) 
//ставки rate на количество отработанных дней days.


class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        const salary = this.rate * this.days
        return salary
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary()); 


// Помните наше практическое задание с опросником для владельцев котиков? Он нам снова пригодится! 
// Напишите класс Cat со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), 
// и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника. 
// В этом классе будут только свойства и конструктор, без методов. Выведите результат (заполненный объект класса Cat)
//  в консоль при помощи console.log.

const catName = document.querySelector("#catname");
const catBreed = document.querySelector("#catbreed");
const saveCat = document.querySelector("#savecat");

class Cat {
    constructor (name, breed, gender) {
        this.name = name;
        this.breed = breed;
        this.gender = gender;
    }
}

let cat = {};

saveCat.onclick = function () {
cat.name = catName.value;
cat.breed = catBreed.value;

const catGender = document.querySelectorAll('input[name="sex"]'); 
for (let i=0; i<catGender.length; i++) {  //сделала метод не по заданию, потому что хз как из радиокнопки иначе значение брать
function getGender () {
    if (catGender[i].checked) {
        const gotGender = catGender[i].value;
        return gotGender
    }
}}
const fuckingGender = getGender();
cat.gender = fuckingGender;

console.log(cat);
}
    

// Создайте класс Калькулятор, который будет содержать 4 статических метода - 
// Сложение, Умножение, Вычитание и Деление. Доработайте свою страничку с 
// калькулятором, чтобы в ней использовались методы этого класса.

let number1 = document.querySelector("#calcInput1");
let number2 = document.querySelector("#calcInput2");


class Calc {
    static addition(a, b){
        let additionResult = a + b;
        return additionResult
    }

    static substraction(a,b) {
        let substractionResult = a - b;
        return substractionResult
    }

    static multiplication(a,b) {
        let multiplicationResult = a * b;
        return multiplicationResult
    }

    static division(a,b) {
        let divisionResult = a / b;
        return divisionResult
    }
}

const addition = document.querySelector("#addition");
const substraction = document.querySelector("#substraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");

addition.onclick = function() {
    let a = Number(number1.value);
    let b = Number(number2.value);
    console.log(Calc.addition(a, b));
}

substraction.onclick = function() {
    let a = Number(number1.value);
    let b = Number(number2.value);
    console.log(Calc.substraction(a, b));
}

multiplication.onclick = function() {
    let a = Number(number1.value);
    let b = Number(number2.value);
    console.log(Calc.multiplication(a, b));
}

division.onclick = function() {
    let a = Number(number1.value);
    let b = Number(number2.value);
    console.log(Calc.division(a, b));
}

