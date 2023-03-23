// #33
// Change code below this line
// function findMatches(firstArg, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (firstArg.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//     return matches;

// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// #34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`;
//   }

//   // Change code above this line
// };
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// #35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     for (const book of this.books) {
//       if (book === oldName) {
//         this.books.splice(this.books.indexOf(book), 1, newName);
//       }
//     }

//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf);
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf);

// #39

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     for (potion of this.potions) {
//       if (potion === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//       }
//     }

//     // Change code above this line
//   },
// };

// #41

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (potion of this.potions) {
//       const potionIndex = this.potions.indexOf(potion);

//       if (potion.name === potionName) {
//         this.potions.splice(potionIndex, 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
// // console.log(atTheOldToad.getPotions());

// 4/48

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     const test = this.pizzas.some(function (el) {
//       return pizzaName === el;
//     });
//     if (test) return onSuccess(pizzaName);
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.some((el) => pizzaName === el)) return onSuccess(pizzaName);
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.some((el) => pizzaName === el)) return onSuccess(pizzaName);
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// 37

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalFriendCount = (users) => {
//   return users.reduce((acc, user) => acc + user.friends.length, 0);
// };
// console.log(getTotalFriendCount(users));

// 48
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// getTotalBalanceByGender = (users, gender) => {
//   return users.filter((el) => el.gender === gender).reduce((total, user) => total + user.balance, 0);
// };
// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));

// Лекция2 Модуль 1 Мельник
// ## Example 9 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`

// let nameEl = "";
// nameEl = prompt("Логин", "");
// console.log(nameEl);
// if (nameEl === "Админ") {
//   let pass = prompt("Пароль", "");
//   if (pass === "Я админ") {
//     console.log("Здравствуйте!");
//   } else {
//     console.log("Неверный пароль");
//   }
// } else if (nameEl === ""||nameEl === null) {
//   console.log("Отменено");
// } else console.log("Я вас не знаю");

// Модуль 2 занятие 1
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.


// let stringEl = " Привіт, Сонечко! давно не бачились ";
// let result = stringEl.trim().split(' ');
// result.pop();
// result.shift();
// let resultStr=result.join(' ');
// console.log(resultStr);

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.

// stringEl = "Привет я тебя знаю";
// result = stringEl.split("").reverse();
// console.log(result.join(""));


// ## Example 7 - Сортування масиву із циклом

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.

// const arr = ["bank", "onion", "apple", "juice", "cup"];
// result = arr.sort();
// console.log(result);


// ## Example 8 - Пошук елемента

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const arr = [34, 45, 56, 2, 1, 57];
// let number = 0;
// for (let i = 0; i < arr.length; i+=1){
//     if(arr[0]>arr[i]){
//         number = arr[i];
        
// }
// }
// console.log(number);

// ## Example 7 - Середнє значення

// Напишіть функцію `calAverage()` яка приймає довільну кількість аргументів
// і повертає їхнє середнє значення. Усі аргументи будуть лише числами.


// function calAverage() {
//     let sum = 0;
//     let total = 0;
//     for (const argument of arguments) {
//         sum += argument;
    
//     }
// total = sum / arguments.length;
//     return total;
// }
// console.log(calAverage(22, 33, 44, 55));

// ## Example 8 - Форматування часу
// Напиши функцію `formatTime(minutes)` яка переведе значення `minutes`
// (кількість хвилин) у рядок у форматі годин та хвилин `HH:MM`.

// function formatTime(minutes){
//     let hours = Math.floor(minutes / 60);
//     console.log(hours);
//     let min = minutes % 60;
//     console.log(min);
//     return `${hours}:${min}`;
// }
    
// console.log(formatTime(80));
// console.log(formatTime(120));
//     console.log(formatTime(368));




// ## Example 9 - Колекція курсів (includes, indexOf, push і т. д.)

// Напишіть функції для роботи з колекцією навчальних курсів `courses`:

// - `addCourse(name)` - додає курс до кінця колекції
// - `removeCourse(name)` - видаляє курс із колекції
// - `updateCourse(oldName, newName)` - змінює ім'я на нове


// let collection = ["Tima", "Ira", "Tanya"];
// console.log(collection);

// function addCourse(name) {
//     if(collection.includes(name) !== name){
//     collection.push(name);}
//     return collection;
// }

// console.log(addCourse("Ann"));


// function removeCourse(name) {
//     if (collection.indexOf(name) === -1) {
//         return `такого нема`
//     }
//     collection.splice(collection.indexOf(name), 1);
//     return collection;
// }

// console.log(removeCourse("Zina"));
// console.log(removeCourse("Ira"));

// function updateCourse(oldName, newName) {
//      if (collection.indexOf(oldName) === -1) {
//        return `такого нема`;
//      }
//      collection.splice(collection.indexOf(oldName), 1, newName);
//     return collection;
// }
// console.log(updateCourse("Vlad", "Andry"));

// console.log(updateCourse("Tima", "Andry"));


// console.log("Модуль 3. Заняття 1. Об'єкти");
// ## Example 1 - Основи об'єктів

// Напиши скрипт, який для об'єкта `user`, послідовно:

// - додає поле `mood` зі значенням `'happy'`
// - замінює значення `hobby` на `'skydiving'`
// - замінює значення `premium` на `false`
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`

// ```js
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (let key of keys){
//     console.log(`${ key }:${ user[key] } `);
// }


// console.log("user", user);

// ## Example 2 - метод Object.values()

// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно
// вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salaries1 = {};

// const calcSalaries = function (salaries) {
//     const values = Object.values(salaries);
//     if (values.length === 0) {
//         return 0;
//     };
//     let total=0;
//     for (const value of values) {
//         total += value;
//     }
//     return total;
// };
// // calcSalaries(salaries1);
// console.log(calcSalaries(salaries));


// ## Example 3 - Масив об'єктів

// Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта

// ### Код
/**
 * 1. Створити функцію яка приймає обʼєктів і рядок(імя бажаного каменю)
 * 2. Знайти із масиву обʼєктів бажаний камень
 * 3. Порахувати його загальну вартість
 * 4. Повернути вартість із функції
 */

// ```js
const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];



