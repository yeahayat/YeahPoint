// Объект для хранения пользователей
let users = {
    'user1': { email: 'user1@example.com', password: 'password123' },
    'user2': { email: 'user2@example.com', password: 'password456' }
};

// Функция для проверки авторизации
function checkLogin(email, password) {
    for (let userId in users) {
        const user = users[userId];
        if (user.email === email && user.password === password) {
            return true;
        }
    }
    return false;
}

// Слушатель на кнопку логина
document.querySelector('#login-btn').addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Проверка данных
    if (checkLogin(email, password)) {
        alert('Успешный вход');
        window.location.href = 'welcome.html';  // Перенаправление на страницу после входа
    } else {
        alert('Неверный логин или пароль');
    }
});
