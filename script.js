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
// const catGender = document.querySelectorAll('input[name="sex"]');
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
// cat.gender = catGender.value;

const catGender = document.querySelectorAll('input[name="sex"]');
for (let i=0; i<catGender.length; i++) {
function getGender () {
    if (catGender[i].checked) {
        const gotGender = catGender[i].value;
        return gotGender
    }
}}
const fuckingGender = getGender();
//console.log(fuckingGender);
cat.gender = fuckingGender;

console.log(cat);
}
    




