$(document).ready(function(){
	console.log('i am ready')

$('#submit').on('click', function() {

	var name = $('#name').val();
	var email = $('#email').val();
	var subject = $('#subject').val();

	$('#returnmessage').empty();

	if (name === '' || email === '') {
		alert('Please fill out the required fields.')
		event.preventDefault();
	} else {
		$.post('contact_form.php', {
			name1: name,
			email1: email,
			subject1: subject
		}, function(data) {

		$('#returnmessage').append(data);
			if (data === 'Your message has been received. We will get back to you shortly.') {
				$('#form')[0].reset();
			}
		});
	}

});

});
