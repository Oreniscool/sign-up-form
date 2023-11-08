let pwd1 = document.getElementById('password');
let pwd2 = document.getElementById('con-password');
let msg = document.querySelector('.message');


    function validatePassword() { 
    if(pwd1.value == '' || pwd2.value == '') {
        pwd2.setCustomValidity("Passwords Can't Be Empty");
        pwd1.style.border = '1px solid red';
        pwd2.style.border = '1px solid red';
        msg.textContent = "Passwords Can't Be Empty";
        msg.style.color = 'red';
    }
    else if (pwd1.value != pwd2.value) {
        pwd2.setCustomValidity("Passwords Don't Match");
        pwd1.style.border = '1px solid red';
        pwd2.style.border = '1px solid red';
        msg.textContent = "Passwords Don't Match";
        msg.style.color = 'red';
    }
    else {
        pwd2.setCustomValidity('');
        pwd1.style.border = '1px solid green';
        pwd2.style.border = '1px solid green';
        msg.textContent = 'Passwords Match';
        msg.style.color = 'green';
       
    }
}