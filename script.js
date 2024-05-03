let username = document.getElementById('username');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submit');
let checkBox = document.getElementById('checkbox');

submitBtn.addEventListener('click',(event)=>{
	event.preventDefault();
	if (username.value === "" || password.value === "") {
		return;
	}
	let user = {
		name:username.value,
		pass:password.value,
	}
	if (checkBox.checked) {
		localStorage.setItem('test',JSON.stringify(user));
	}
	alert(`Logged in as ${username.value}`);
	username.value = "";
	password.value = "";
});
		
var data = localStorage.getItem('test');
if (data !== null) {
	let btn = document.createElement('button');
	btn.setAttribute('id','existing');
	btn.innerText = 'Login as existing user';
	document.querySelector('form').append(btn);
	btn.addEventListener('click',()=>{
		let existname = JSON.parse(data);
		alert(`Logged in as ${existname.name}`);
	});
}