$(document).on('ready', function() {
  
  $("p")
  .mouseover(function () {
       $(this).css("color","pink");
                    })

  .mouseleave (function() {
    	$( this ).css("color", "black");
  	});
  $(":header").append("!");

  	$(".link1").click(function() {
  		var answer = prompt("Are you sure you want to click on this link?");
  		if (answer === "yes") {
  			window.open(this.href);
  			return false;
  		} else {
  			console.log("We won't open this link, we will delete it");
  			$(this).removeAttr('href');
  			return false;
  		}
  	});

});
