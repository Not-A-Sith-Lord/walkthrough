
$(document).on('turbolinks:load',function(){

$('#walkthrough-carousel').carousel({
    interval: false,
    wrap: false
}); 

	$('#walkthrough-carousel').bind('slid.bs.carousel', function (e) {
		var count = $(".carousel-inner").children().length;
			console.log("The number of item containers is: " + count);
	    var index = $(e.target).find(".active").index();
	    	console.log("The number of current index is: " + index);
	    if(index === (count - 1)){
	    	$("#launch-code").show();
	    	$(this).children('#right-control').hide();
	    } else if ( index === 0){
	    	$(this).children('#left-control').hide();
	    } else {
	    	$("#launch-code").hide();
	    	$('#right-control, #left-control').show();
	    }
	      
});


	});

// end 

function niceFetch(results){
	console.log("this should only appear once");
	console.log(results);

	$("#carousel-content").empty();
	var stuff = [];
	var i = 0;

	results.slides.forEach(function(object){
		var content = object.content;
		
		$(".carousel-inner").append(content);
		// stuff.push(styledContent);
		Prism.highlightAll();
	});
	

	
	$("#walkthrough-carousel").removeClass("hidden");
	$('#left-control').hide();

	var executeButton = ` <a id="launch-code" class="right carousel-control" href="${results.destination}">Execute Code</a>`
	$('#left-control').after(executeButton);

}
//End Bueno Fetch

function badFetch(error){
	console.log(error)
	console.log("potato4")
}

//End Bad Fetch

function hideButton(){
	$(".intro").html("<div class='hi'>Loading Page...</div>");
}



