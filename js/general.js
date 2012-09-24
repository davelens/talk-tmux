$(document).ready(function(){
	$('#search').on('click', function(e){
		e.preventDefault();

		var google = $('#google');
		var query = $('#query');
		var url = encodeURIComponent(query.val());

		google.append('<p><a target="_blank" href="http://google.com/search?q=' + url + '">LMGTFY! - '+ query.val() +'</a></p>');
	});
});
