

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
    getElementById('login').action = "entrar.html";
   
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
            window.location.href = "perfil.html";
            
        } else {
            alert("Login Incorreto")
        }
    } else {
        console.log('Credenciais erradas') 
    }
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Ver mais";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Ver menos";
      moreText.style.display = "inline";
    }
  }