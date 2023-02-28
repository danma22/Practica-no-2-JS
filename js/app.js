"use strict"

var form1 = document.getElementById("form1")
var form2 = document.getElementById("form2")


document.addEventListener("DOMContentLoaded", function() {
	if (form1 != null) {
		form1.addEventListener('submit', validarFormulario1);
	}
	if (form2 != null) {
		form2.addEventListener('submit', validarFormulario2);
	}
});

  
function validarFormulario1(e) {
	e.preventDefault();
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	let validation = true;

	if(user.length == 0 || user != 'admin') {
		document.getElementById('user').classList.add('is-invalid');
	  	validation = false
	}

	if (pass.length == 0 || pass != 'admin') {
		document.getElementById('pass').classList.add('is-invalid');
		validation = false
	}

	if (!validation) {
		$('#modal-danger').modal('show');
		return;
	}

	this.submit();
}

function validateEmail(input){
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if( validEmail.test(input.value) ){
		return true;
	}else{
		return false;
	}
} 

function validarFormulario2(e) {
	e.preventDefault();
	var user = document.getElementById('user');
	var name = document.getElementById('name');
	var last = document.getElementById('last');
	var email = document.getElementById('email');
	var pass = document.getElementById('pass');
	var cpass = document.getElementById('Cpass');

	user.classList.remove('is-invalid');
	name.classList.remove('is-invalid');
	last.classList.remove('is-invalid');
	email.classList.remove('is-invalid');
	pass.classList.remove('is-invalid');
	cpass.classList.remove('is-invalid');

	let validation = true;
	let desc = ''

	if(user.value.length == 0) {
		user.classList.add('is-invalid');
		desc = desc + '<p>El campo usuario está vació</p>'
	  	validation = false
	}

	if (name.value.length == 0) {
		name.classList.add('is-invalid');
		desc = desc + '<p>El campo nombre está vació</p>'
		validation = false
	}

	if (last.value.length == 0) {
		last.classList.add('is-invalid');
		desc = desc + '<p>El campo apellido está vació</p>'
		validation = false
	}

	if (email.value.length == 0) {
		email.classList.add('is-invalid');
		desc = desc + '<p>El campo email tiene un valor incorrecto</p>'
		console.log(validateEmail(email))
		validation = false
	}

	if (pass.value.length == 0 || cpass.value.length == 0 || pass.value != cpass.value) {
		pass.classList.add('is-invalid');
		cpass.classList.add('is-invalid');
		desc = desc + '<p>El campo contraseña está vació o no coincide con la confirmación</p>'
		validation = false
	}

	if (!validation) {
		$('#modal-danger').modal('show');
		document.getElementById("desc").innerHTML = desc
		return;
	}

	$('#modal-danger').modal('show');
}

