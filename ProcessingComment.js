function addComment()
{
	var userName = $('#name').val();
	$('#123').append('<p><b>' +userName+ '</b></p>');
	var userName = $('#comment').val();
	$('#123').append('<p>' +userName+ '</p>');
}