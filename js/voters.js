function myFunction() {
    let x = document.getElementById('age').value


    if (isNaN(x) || x < 18) {
        alert('Must be 18 years or older!')
    }
    return false

}

let check = function() {
    if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Passwords match';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = "Passwords don't match";
  }
}
