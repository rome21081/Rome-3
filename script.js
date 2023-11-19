document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   
    if (email === 'Petotie@Cutie' && password === '143') {
       window.location.href = 'unknown.html'; 
    } else {
       alert('Incorrect email or password');
    }
   });