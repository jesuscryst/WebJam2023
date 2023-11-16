var users = [
    { username: ['petrzot', 'lucyliu'] , password: ['zotzot', 'mewmew'] },
];

function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(userData =>
        userData.username.includes(username) && userData.password.includes(password)
    );

    if (user) {
        window.location.href = 'index.html';
    } else {
        console.error('Invalid username or password');
    }
}

function createAccount() {

}
