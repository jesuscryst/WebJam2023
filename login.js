var users = [
    { username: ['petrzot'] , password: ['zotzot'] , email: ['zotastic@gmail.com']},
];

function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(userData =>
        (((userData.username.includes(username) && userData.password.includes(password))) || (userData.email.includes(username) && userData.password.includes(password)))
    );

    if (user) {
        window.location.href = 'index.html';
    } else {
        console.error('Invalid username or password');
    }
}

function addToUsers(key, input) {
    const user = users[0];
    if (user.hasOwnProperty(key)) {
        user[key].push(input.value);
    } else {
        console.error('Invalid key:', key);
    }
}

function createAccount() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    addToUsers('username', username);
    addToUsers('email', email);
    addToUsers('password', password);

    window.location.href = 'index.html';
}
