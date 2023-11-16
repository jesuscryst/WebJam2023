var users = [
    { username: 'petrzot', password: 'zotzot' },
];

function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to index.html upon successful login
        window.location.href = 'index.html';
    } else {
        // Handle unsuccessful login (show error message, etc.)
        console.error('Invalid username or password');
    }
}

function createAccount() {

}
