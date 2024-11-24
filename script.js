let users = JSON.parse(localStorage.getItem('users')) || {};

function User(login, password) {
    this.login = login;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

const submit = document.querySelector('#submit');
if (submit) {
    submit.addEventListener('click', () => {
        const login = document.querySelector('#login').value;
        const password = document.querySelector('#password').value;

        if (!login || !password) {
            alert('Заполните все поля!');
            return;
        }

        const user = new User(login, password);
        const userId = 'User' + createId(users);
        users[userId] = user;

        localStorage.setItem('users', JSON.stringify(users));
        alert('Йеее! Ты успешно зарегистрировался, бро!');
        console.log(users);
    });
}

const loginSubmit = document.querySelector('#login-btn');
if (loginSubmit) {
    loginSubmit.addEventListener('click', () => {
        const login = document.querySelector('#login').value;
        const password = document.querySelector('#password').value;

        if (!login || !password) {
            alert('Заполните все поля!');
            return;
        }

        let userFound = false;

        for (let userId in users) {
            const user = users[userId];
            if (user.login === login && user.password === password) {
                userFound = true;
                alert('Ты реальный, добро пожаловать!');
                break;
            }
        }

        if (!userFound) {
            alert('Пффф, бро, тебя нет в базе. Попробуй снова!');
        }
    });
}
