 
  
$(document).ready(function(){
	$( ".hello" ).dialog({ autoOpen: false });
		$( ".buttonLarge" ).click(function() {
			$( ".hello" ).dialog( "open" );
			$(".buttonLarge").click(function() { $(".hello").dialog("close"); });
			// $( ".buttonLarge" ).dialog( "close" );
		});
	});
  
