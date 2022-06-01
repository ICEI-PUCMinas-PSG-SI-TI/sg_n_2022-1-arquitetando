const signUp = e => {
    let nome = document.getElementById('nome').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.email.toLowerCase() == email.value.toLowerCase() 
        );

    if(!exist){
        formData.push = ({ nome, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('email').focus();
        alert("Conta Cadastrada\n\nPor favor faca seu login agora.");
        location.href = "entrar.html";
    }
    else{
        alert("ERRO!! Conta ja criada");
    }
    e.preventDefault();
};


function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email.value && data.pwd.toLowerCase() == pwd.value);
    if(!exist){
        alert("Login Incorreto");
    }
    else{
        location.href = "perfil.html";
    }
    e.preventDefault();
}
