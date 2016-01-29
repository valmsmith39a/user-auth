$(document).ready(init);

function init(){
	console.log('in register init()');
	$('#submit').on('click', getUsernamePassword);
}

function getUsernamePassword(){
	console.log('in get user password');
	var email = $('#username').val();
	var password = $('#password').val();
	var passwordConfirm = $('#password-confirm').val();

	if(password  !== passwordConfirm){
		$('password').val('');
		$('password-confirm').val('');
		return alert('password and confirmation do not match, please try again');
	}

	$.post('/users/register', {'email':email, 'password':password})
	.success(function(data) {
		console.log('data:', data);
		debugger;
		//location.href = 'login';
  }).fail(function(err) {
		console.log('err:', err)
    alert('something went wrong :(')
  });
}