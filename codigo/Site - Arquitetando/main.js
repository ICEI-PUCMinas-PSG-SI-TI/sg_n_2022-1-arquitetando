

function UserRegistration() {
    let storedUsers = localStorage.UsersLogin ? JSON.parse(localStorage.UsersLogin) : [];
    const userData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pwd').value
    };
    storedUsers.push(userData);
    localStorage.setItem('UsersLogin', JSON.stringify(storedUsers));
    alert("Conta Cadastrada\n\nPor favor faca seu login agora.");
    window.location.reload();
  
}

function loginUser() {
    const loginEmail = document.getElementById('email').value
    const loginPass = document.getElementById('pwd').value
    if (localStorage.getItem('UsersLogin')) {
        const allStoredUsers = JSON.parse(localStorage.getItem('UsersLogin'));
        const matchedUser = allStoredUsers.filter(user => {
            return loginEmail === user.email && loginPass === user.password;
        })
        if (matchedUser.length) {
            alert('Login successful');
    
        } else {
            alert("Login Incorreto")
        }
    } else {
        console.log('Credenciais erradas') 
    }
}
