$(document).ready(function() {

	updateCommentsList();

	// Add User button click
    $('#btnComment').on('click', comment);

});

// Add User
function comment(event) {
    event.preventDefault();

    $('#addComment input');

        // If it is, compile all user info into one object
        var newUser = {'username': $('#addComment fieldset input#inputUserName').val(),
    				'email': $('#addComment fieldset input#inputUserName').val()}

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/twitter/addcomment',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addComment fieldset input').val('');
                updateCommentsList();
            }

            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);
            }
			}); 
}

function updateCommentsList() {
	$.getJSON( '/twitter/commentList', function( data ) {

		$.each(data, function() {
			console.log(this.username);
		});

	});
}
