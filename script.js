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

const worker = new Worker('Иван', 'Иванов', 10, 31);

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
const catGender = document.querySelectorAll('input[type=radio][name="sex"]'); 

class Cat {
    constructor (name, breed, gender) {
        this.name = name;
        this.breed = breed;
        this.gender = gender;
    }
}

let cat = new Cat ();


catGender.forEach(radio => radio.addEventListener('change', () => 
{const gender = radio.value;
cat.gender = gender;} ));

saveCat.onclick = function () {
cat.name = catName.value;
cat.breed = catBreed.value;


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

// 4. Реализуйте класс `Валидатор`, который будет проверять строки. К примеру, у него 
// будет метод `isEmail`, который параметром принимает строку и проверяет, является ли она 
// корректным емейлом или нет. Если является - возвращает true, если не является - то false. 
// Кроме того, класс будет иметь следующие методы: метод `isDomain` для проверки домена, метод 
// `isDate` для проверки даты и метод `isPhone` для проверки телефона.
    
//     Сделайте 2 версии этого класса - стандартную и статическую.

const mail = document.querySelector("#mail").value;
const domain = document.querySelector("#domain").value;
const date = document.querySelector("#date").value;
const phone = document.querySelector("#phone").value;


class ValidatorStatic {
    static isEmail () {
        let emailChecked = false;
        if (mail.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i) == true) {
            emailChecked = true;
        }
        return emailChecked;
        
    }

    static isDomain () {
        let domainChecked = false;
        if (domain.match(/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/) == true) {
            domainChecked = true;
        }
        return domainChecked;
    }

    static isDate () {
        let dateChecked = false;
        if (date.match(/^(0[1-9]|1[0-2])\s\s([0-9]{4})$/) == true) {
            dateChecked = true;
        }
        return dateChecked;
        
    }

    static isPhone () {
        let phoneChecked = false;
        if (phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) == true) {
            phoneChecked = true;
        }
        return phoneChecked;
        
    }
}


//NOT STATIC

class Validator {
    constructor(mail, domain, date, phone) {
        this.mail = mail;
        this.domain = domain;
        this.date = date;
        this.phone = phone;
    }

    isEmail (mail) {
        let emailChecked = false;
        if (mail.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i) == true) {
            emailChecked = true;
        }
        return emailChecked;
    }

    isDomain () {
        let domainChecked = false;
        if (domain.match(/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/) == true) {
            domainChecked = true;
        }
        return domainChecked;
    }

        isDate () {
        let dateChecked = false;
        if (date.match(/^(0[1-9]|1[0-2])\s\s([0-9]{4})$/) == true) {
            dateChecked = true;
        }
        return dateChecked;
        
    }

    isPhone () {
        let phoneChecked = false;
        if (phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) == true) {
            phoneChecked = true;
        }
        return phoneChecked;
        
    }
}



// function checkMail () {
//     const abcd = "info@speakfrench.ru";
// if (abcd.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
//     console.log("It works!");
// }
// else {
//     console.log("doesn't work");
// }
// }

// checkMail();


