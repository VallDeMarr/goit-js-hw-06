const control = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

control.addEventListener('input', (event) => {
    text.style.fontSize = event.target.value + 'px'
})


// console.log(control);
// console.log(text);

// console.log(control.value);
// console.log(text.value);

//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.

// const worker = new Worker("Иван", "Иванов", 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.getFullName); //выведет 'Иванов Иван'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }
//   get getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const worker = new Worker("Иван", "Иванов", 10, 31);

// console.log(worker)
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.getFullName); //выведет 'Иванов Иван'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31


//Напишіть новий клас Boss, цей клас успадковується від класу Worker та минулого
//завдання. З'являється нові властивості: workers – кількість працівників.
//І зарплата вважається інакше: добуток (множення) ставки rate на кількість
//відпрацьованих днів і кількість працівників.



// class Boss extends Worker {
//     constructor(name, surname, rate, days, workers) {
//         super(name, surname, rate, days)
//         this.workers = workers;
//     }
//     getSalary() {
//         return this.rate * this.days * this.workers
//     }
// }




// const boss = new Boss("Иван", "Иванов", 10, 31, 10);
// console.log(boss); //выведет 'Иван'
// console.log(boss.surname); //выведет 'Иванов'
// console.log(boss.getFullName); //выведет 'Иванов Иван'
// console.log(boss.rate); //выведет 10
// console.log(boss.days); //выведет 31
// console.log(boss.workers); //выведет 10
// console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10


//Трикутник. Напишіть цикл, який виводить такий трикутник:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// const test = '#'
// const lengs = 7;
// let arr = []
 
// for (let i = 1; i <= lengs; i++) { 
//     // console.log(arr)
//     for (let j = 0; j < i; j++) {
//         arr.push(test)
//     }
//     arr.push("\n");
// }
// console.log(arr.join(''))