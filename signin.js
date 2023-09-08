function register() {
    let Name_input = document.getElementById('name-input').value;
    let Email_input = document.getElementById('email-input').value;
    let Password_input = document.getElementById('pw-input').value;

    let user = {
        Name:  Name_input,
        Email : Email_input,
        Password: Password_input,
    };

    let user_storing = JSON.stringify(user);
    localStorage.setItem("user",user_storing)
}

