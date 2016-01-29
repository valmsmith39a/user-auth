$(document).ready(init);

function init(){
	console.log('in login init()');
	$('#submit').on('click', getUsernamePassword);
}

function getUsernamePassword(){
	console.log('in get username and password for login');
	var email = $('#username').val();
	var password = $('#password').val();

	$.post('/users/login', {'email':email, 'password':password})
	.success(function(data){
			location.href = '/login';
	});
}
