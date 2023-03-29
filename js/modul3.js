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
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];
// function calcTotalPrice(stones, stoneName) {
//   let targetStone = null;
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       targetStone = stone;
//     }
//   }
//   return targetStone.price * targetStone.quantity;
// }
// console.log(calcTotalPrice(stones, "Щебінь"));

// ## Example 4 - Комплексні завдання

// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.

// ```js
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const TransactionTypes = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// let transactionId = 1;

// // /*
// //  * Кожна транзакція це об'єкт із властивостями: id, type та amount
// //  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: account.transactions.length,
//     };
//   },


//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     account.balance += amount;
//     const transaction = account.createTransaction(amount, TransactionTypes.DEPOSIT);
//     account.transactions.push(transaction);
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */

//   withdraw(amount) {
//     if (amount > account.balance) {
//       return "Не вистачає коштів";
//     }
//     account.balance -= amount;
//     const transaction = account.createTransaction(amount, TransactionTypes.WITHDRAW);
//     account.transactions.push(transaction);
//  },
  
// getBalance() {
//   return account.balance;
// },

// // Метод ищет и возвращает обєкт транзакции по id
// getTransactionDetails(id) {
//   for (const transaction of account.transactions) {
//     if (transaction.id === id) {
//       return transaction;
//     }
//   }
//   return "Операції не знайдено";
// },
// // Метод  возвращает количество средств определенного типа транзакции из всей истории транзакции

//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of account.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },

// };
// console.log(account.getBalance());
// account.deposit(150);
// account.deposit(550);
// account.deposit(50);
// account.deposit(1150);
// account.withdraw(350);
// account.withdraw(150);
// console.log(account.getBalance());
// console.log(account.transactions);

// console.log(account.getTransactionDetails(5));
// console.log(account.getTransactionTotal(TransactionTypes.WITHDRAW));


// Урок №2

// # Модуль 3 Занятие 6. Деструктуризация и rest/spread

// ## Example 1 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// 1 вариант(деструктуризация в самих параметрах)
// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// 2 вариант (деструктуризация в теле функции)
// function calcBMI(clientParams) {
//     const { weight, height } = clientParams;
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );


// ## Example 2 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// 1 вар
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }
// 2 вар
// function printContactsInfo(data) {
//     const { names, phones } = data;
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ## Example 3 - Глубокая деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function getBotReport(companyInfo) {
//   return `${companyInfo.companyName} has ${
//     companyInfo.bots.repair + companyInfo.bots.defence
//   } bots in stock. Repair bots count is ${
//     companyInfo.bots.repair
//   }. Defence bots count is ${companyInfo.bots.defence}`;
// }

// декларативний код(коли не булу деструктуризации писали так)
// function getBotReport(companyInfo) {
//     const companyName = companyInfo.companyName;
//     const repairBots = companyInfo.bots.repair;
//     const defenceBots = companyInfo.bots.defence;
//   return `${companyName} has ${repairBots + defenceBots} bots in stock. Repair bots count is ${repairBots}. Defence bots count is ${defenceBots}`;
// }


// 1 вар (вкладенна деструктуризация 2 уровня)
// function getBotReport(companyInfo) {
//     const { companyName,
//         bots: {
//         repair: repairBots, defence: defenceBots
//     }, } = companyInfo;
//   return `${companyName} has ${repairBots + defenceBots} bots in stock. Repair bots count is ${repairBots}. Defence bots count is ${defenceBots}`;
// }

// 2 вар
// function getBotReport(companyInfo) {
//     const { companyName, bots } = companyInfo;
//     const { repair: repairBots, defence: defenceBots } = bots;
//   return `${companyName} has ${repairBots + defenceBots} bots in stock. Repair bots count is ${repairBots}. Defence bots count is ${defenceBots}`;
// }

// // // // Ожидается
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

// ## Example 4 - Деструктуризация

// Перепиши функцию так, чтобы она принимала объект параметров со свойствами
// `companyName` и `stock` и выводила репорт о количестве товаров на складе любой
// компании.


// ```js
// // Решение
// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

// ## Example 5 - Операция spread

// На сайте есть настройки по дефолту

// const settings = {
//   theme: "light",
//   fontFamily: "default",
//   navbar: "fixed",
//   markdown: "basic",
// };

// // треба змінити на інші настройки

// const updatesettings = {
//   theme: "dark",
//   fontFamily: "monospace",
//   navbar: "static",
//   markdown: "basic",
// };

// // оператор spread робить заміну
// const siteSettings = {
//     ...settings,
//     ...updatesettings,
// };

// spred оператор використовують щоб копіювати масив, він завжди робить копію

// const technology = ["HTML", 'CSS'];
// const programLanguages = ["Javascript", "Typescript"];
// const frameworks = ["React", "Next"];
// const fullStack = [...technology, ...programLanguages, ...frameworks];
// const fullStack = ["HTML", "CSS", ...programLanguages, "React", "Next"];

// ## Example 6 - Операция rest

// чтоб сделать массив и потом с ним работать используют Array.from
// function getMargin() {
//   console.log(Array.from(arguments));
// };


// или rest (собиает все аргументи в один массив)
// function getMargin(...args) {
//   console.log(args);
// }
// getMargin(12);
// getMargin(12, 15);
// getMargin(12, 15, 20);
// getMargin(12, 15, 20, 45);

// если данных прилетает больше, чем нужно в работе, то ненужные данные можно записать в отдельную зминну props (как массив)

// function getUserInfo(name, age, address, ...props) {}

// getUserInfo("Bob", 34, "London", "0987654321", "user@gmail.com");
// getUserInfo("Bob", 34, "London");

// ## Example 1 - Коллбек функции

// Напишите следующие функции:

// - `createProduct(obj, callback)` - принимает объект товара без id, а также
//   колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в
//   свойство `id` и вызывает колбек передавая ему созданный обьект.
// - `logProduct(product)` - коллбек принимающий обьект продукта и логирующий его в
//   консоль
// - `logTotalPrice(product)` - коллбек принимающий обьект продукта и логирующий
//   общую стоимость товара в консоль

// 1) Додати логіку генерації id
// 2) Навчити нашу ф-ю працювати з callback
// 3) callback має вміти приймати обєкт товара

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);


// function createProduct(product, callback) {
//     // сгенерувати id (вместо уникального id передає в мс время запуска)
//     const id = Date.now();
//     const newProduct = { ...product, id };
//     callback(newProduct);
// }
// function logProduct(product) {
//     console.log(product);
// }
// function logTotalPrice({ price, quantity }) {
//     console.log(price * quantity);
//     return price * quantity;
// }

// ## Example 2 - Коллбек функции

// Добавьте объекту `account` методы `withdraw(amount, onSuccess, onError)` и
// `deposit(amount, onSuccess, onError)`, где первый параметр это сумма операции, а
// второй и третий - колбеки.

// Метод `withdraw` вызывает onError если amount больше TRANSACTION_LIMIT или
// this.balance, и onSuccess в противном случае.

// Метод `deposit` вызывает onError если amount больше TRANSACTION_LIMIT или меньше
// либо равен нулю, и onSuccess в противном случае.






// ## Example 6 - Инлайн стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// function each(array, callback) {
//     const newArray = [];
//     for (let el of array) {
//         const result = callback(el);
//         newArray.push(result);
//     }
//     return newArray;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// ## Example 7 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// ```js
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }
// function logItems(items) {
//     items.forEach(function (item, index) {
//         console.log(`${index+1} - ${item}`);
//     });
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);


// ## Example 8 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// // ```js
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(",");
//     const phoneList = phones.split(",");
//     nameList.forEach(function (name, index) {
//         console.log(`${name}: ${phoneList[index]}`);
//     });
// }
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// ## Example 9 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// ```js

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }


// function calculateAverage(...args) {
//     let total = 0;
//         args.forEach((element) => {
//          total += element;
//     });
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// # Модуль 4. Занятие 8. Перебирающие методы массива

// ## Коллекция объектов для всех примеров с автомобилями

// ```js
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
// ```
// ## Example 1 - Метод map

// Пусть функция `getModels` возвращает массив моделей (поле model) всех
// автомобилей.

// function getModels(cars) {
//     return cars.map(function (car) {
//         return car.model;
//     });
// }
// // деструктуризация, нужно только одно поле model
// function getModels(cars) {
//     return cars.map(function ({ model }) {
//     return model;
//   });
// }
// // стрелочная функция
// const getModels = (cars) =>cars.map(({ model }) => model);

// ## Example 2 - Метод map

// Пусть функция `makeCarsWithDiscount` возвращает новый массив объектов с изменным
// значением свойства `price` в зависимости от переданной скидки.

// function makeCarsWithDiscount(cars, discount) {
//     return cars.map(function (car) {
//         return {
//             ...car,
//             // 100%-20%=80% * на цену
//             price: car.price * (1 - discount),
//         };
//     });
// }

// стрелочная
// const makeCarsWithDiscount = (cars, discount) => cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));


// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// ## Example 3 - Метод filter

// Пусть функция `filterByPrice` возвращает массив автомобилей цена которых меньше
// чем значение параметра `threshold`.

// const filterByPrice = (cars, threshold) => cars.filter(({price}) => price < threshold);

// console.table("cars", cars);
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// ## Example 4 - Метод filter

// Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
// onSale которых true.

// 1 вариант
// const getCarsWithDiscount = (cars) =>
//   cars.filter(({ onSale }) => onSale === true);

// 2 вариант // т.к.onSale true, то оно возвращает
// const getCarsWithDiscount = (cars)=> cars.filter(({ onSale }) => onSale);


// console.table("cars", cars);
// console.table(getCarsWithDiscount(cars));

// ## Example 5 - Метод filter
// Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
// совпадает со значением параметра `type`.

// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);

// 2 вар( деструктуризация обєкта, переименовали ключ, чтоб не совпадало с параметором функции чтоб не было конфликта)

// const getCarsWithType = (cars, type) => cars.filter(({ type: carType }) => carType === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

// ## Example 6 - Метод find

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));


// const getCarByPrice = (cars, minprice, maxprice) => cars.filter((car) => car.price >= minprice && car.price <= maxprice);
// console.table(getCarByPrice(cars, 25000, 30000));

// const getCarByPriceAndModel = (cars, price, model) =>
//   cars.filter((car) => car.price <= price && car.model === model);

// console.table(getCarByPriceAndModel(cars, 25000, "CR-V"));

// const getCarByPriceAndModel = (cars, minPrice, maxPrice, models) =>
//   cars.filter(({price, model}) => price <= maxPrice && price>=minPrice && models.includes(model));


// console.table(
//   getCarByPriceAndModel(cars, 20000, 30000, ["CR-V", "CX-9", "F-150", "CX-7"])
// );

// ## Example 7 - Метод sort

// Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
// отсортированный по возврастанию значения свойства `amount`.

// const sortByAscendingAmount = cars =>
//     [...cars].sort((a, b) => a.amount - b.amount);
// console.table(sortByAscendingAmount(cars));

// const sortByModel = (cars) => [...cars].sort((a, b) => a.model.localeComare(b.model));
// console.table(sortByModel(cars));

// ## Example 10 - Метод reduce

// Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
// свойств `amount`).

// const getTotalAmount = (cars) => cars.reduce((acc, { amount }) => acc + amount, 0);

// console.log(getTotalAmount(cars));

// ## Example 11 - Цепочки методов

// Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
// только тех, которые сейчас на распродаже.


// ```js
// const getModelsOnSale = (cars) => cars.filter(({ onSale }) => onSale);
  
// console.table(getModelsOnSale(cars));
// ```

// ## Example 12 - Цепочки методов

// Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
// (свойство onSale), отсортированных по возрастанию цены.

// ```js
// const getSortedCarsOnSale = cars =>
//   (cars.filter(({ onSale }) => onSale))
//   .sort((a, b)=> a.price-b.price);

// console.table(getSortedCarsOnSale(cars));
// ```
// задача с собеседований

// напишите функцию, которая изменяет строку:
// количество итоговых элеметов передвваемой строки должно быть равно позиции исходного элемента в троке
// каждая группа эл - в начинается с заглавной буквы
// между группами ставиться дефис "-"

// const accum = (str) => {
  
// }
// accum("привет") /П-Рр-Иии-Вввв-Еееее-Тттттт

// const accum = (str) => str.toUpperCase().split('')
//   .map((el, index) => `${el}${el.repeat(index).toLowerCase()}`)
// .join('-');
// console.log(accum("привет"));

// # Модуль 5. Занятие 9. Контекст вызова функции и this

// // ## Example 1 - Мастерская драгоценностей

// // Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// // рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// // количеством из свойства `stones`.

// // ```js
// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(({ name}) => name === stoneName);
//     return stone.price * stone.quantity;
//   },

// };


// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600
// // ``

// // ## Example 2 - Телефонная книга

// // Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// // ```js
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// console.log(phonebook.contacts);
// // ```

/// ## Example 3 - Калькулятор

// // Создайте объект `calculator` с тремя методами:

// // - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// // - `add()` - возвращает сумму сохранённых значений.
// // - `mult()` - перемножает сохранённые значения и возвращает результат.

// // ```js
// const calculator = {
//   read(a, b) {
//     this.a = a; // calculator.a = a
//     this.b = b; // calculator.b = b
//   },
//   add(){
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(5, 4);
// console.log(calculator);
// console.log(calculator.add()); // 9
// console.log(calculator.mult()); // 20