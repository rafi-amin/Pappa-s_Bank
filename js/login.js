// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email addrress inside the email the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    const passwodField = document.getElementById('user-password');
    const password = passwodField.value;
    
    // Danger: Do not verify email password on the client side
    // Step-4: Verify email and password
    if(email === 'khanrafi@gmail.com' && password === '10170'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tumi password vule geso!!! Tumi arr aso na. Vuya Lok akta.')
        
    }
})
