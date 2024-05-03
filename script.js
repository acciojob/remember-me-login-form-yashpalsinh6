//your JS code here. If required.
document.getElementById('loginform').addEventListener('submit',function(event)
{
	event.preventDefault();
	var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var remember = document.getElementById('checkbox').checked;

	if (remember) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
} else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
}

alert('Logged in as ' + username);
});
var btn;
window.onload = function() {
    if (localStorage.getItem('username')) {
        btn = document.createElement('button');
        btn.id = 'existing';
        btn.textContent = 'Login as existing user';
        document.body.appendChild(btn);
    }
};

btn.addEventListener('click', function() {
    alert('Logged in as ' + localStorage.getItem('username'));
});
