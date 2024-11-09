const field1 = prompt("Заповніть поле");
const field2 = prompt("Заповніть поле");

if (field1 && field2) {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}

const number1 = parseFloat(prompt("Введіть перше число"));
const number2 = parseFloat(prompt("Введіть друге число"));

if (!isNaN(number1) && !isNaN(number2) && number1 + number2 > 10) {
  alert("Сума більша за 10");
} else {
  alert("Сума менша або дорівнює 10");
}

const textJs = prompt("Введіть слово JavaScript");

if (textJs.toLowerCase() === "JavaScript".toLowerCase()) {
  alert("Ви правильно заповнили поле");
} else {
  alert("Вам потрбно було ввести JavaScript");
}

const numInput = parseFloat(prompt("Введіть число"));

if (numInput >= 10 && numInput <= 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}

const userName = prompt("Введіть ім'я");
const userEmail = prompt("Введіть email");
const userPassword = prompt("Введіть пароль");

if (
  userName.length >= 3 &&
  userEmail.includes("@.") &&
  userPassword.length >= 6
) {
  alert("Дані правильно заповнені");
} else {
  alert("Дані містять помилку");
}
