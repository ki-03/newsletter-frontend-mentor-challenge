const emailInput = document.getElementById("email-input");
const errorMessage = document.getElementById("error-message");

emailInput.addEventListener('input', function(){
    if (!emailInput.checkValidity()){
        errorMessage.textContent = "valid email address!";
        emailInput.style.borderColor = "#FF7361";
        emailInput.style.backgroundColor = '#EAC0AF';
    } else {
        errorMessage.textContent = "";
    
    }
});

const forButton = document.querySelector('button');

forButton.addEventListener('click', function(event){
    event.preventDefault();
    if (emailInput.checkValidity()){
        window.location.href = "success.html";
    } else {
        errorMessage.textContent = "valid email address!";
        emailInput.style.borderColor = "#FF7361";
        emailInput.style.backgroundColor = '#EAC0AF';       
    }

});
