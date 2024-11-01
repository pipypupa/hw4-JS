
        // Завдання 1

        function checkFields() {
            const field1 = document.getElementById("field1").value;
            const field2 = document.getElementById("field2").value;
            const result = (field1 && field2) ? "Обидва поля заповнені" : "Не всі поля заповнені";
            document.getElementById("fieldCheckResult").textContent = result;
        }

        // Завдання 2

        function checkSum() {
            const num1 = parseFloat(document.getElementById("number1").value);
            const num2 = parseFloat(document.getElementById("number2").value);
            const result = (num1 + num2 > 10) ? "Сума більша за 10" : "Сума менша або дорівнює 10";
            document.getElementById("sumCheckResult").textContent = result;
        }

        // Завдання 3

        function checkForJavaScript() {
            const text = document.getElementById("textInput").value;
            const result = text.includes("JavaScript") ? "Текст містить слово JavaScript" : "Текст не містить слово JavaScript";
            document.getElementById("textCheckResult").textContent = result;
        }

        // Завдання 4

        function checkRange() {
            const number = parseFloat(document.getElementById("numberInput").value);
            const result = (number > 10 && number < 20) ? "Число входить в діапазон від 10 до 20" : "Число не входить в діапазон від 10 до 20";
            document.getElementById("rangeCheckResult").textContent = result;
        }

        // Завдання 5

        function validateForm() {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (name.length < 3) {
                document.getElementById("formCheckResult").textContent = "Ім'я повинно містити не менше 3 символів.";
                return false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById("formCheckResult").textContent = "Email повинен містити символ '@' та крапку після нього.";
                return false;
            }

            if (password.length < 6) {
                document.getElementById("formCheckResult").textContent = "Пароль повинен містити не менше 6 символів.";
                return false;
            }

            window.location.href = "success.html";
            return true;
        }
