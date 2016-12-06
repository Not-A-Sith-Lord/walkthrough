// console.log("Main JS loading");
 
$(document).ready(function(){


	$('#text-carousel').bind('slid.bs.carousel', function (e) {
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

	$('.carousel').carousel({
    interval: false,
    wrap: false
}); 


	$(".launch-btn").on("click", function(){
		$.ajax({
			type: "GET",
			url: "/api/paths/1",
			success: niceFetch,
			error: badFetch
		})

	});

	
// End Doc Load


function niceFetch(results){
	console.log("this should only appear once");
	console.log(results);
	hideButton();

	var stuff = [];
	var i = 0;

	results.slides.forEach(function(object){
		var content = object.content;

		var styledContent;
		if (i == 0){
			 styledContent = ` <div class="item active">
                    <div class="carousel-content">
                        <pre>
                        	<code class="language-ruby" >
                            ${content}
                            </code>
                        </pre>
                    </div>
                </div>`;
                i = i + 1;
                console.log(i);

		} else {
			 styledContent = ` <div class="item">
                    <div class="carousel-content">
                        <pre data-line="4">
                        	<code class="language-ruby" >
                            ${content}
                            </code>
                        </pre>
                    </div>
                </div>`;
		}
		
		$(".carousel-inner").append(styledContent);
		// stuff.push(styledContent);
		Prism.highlightAll();
	});
	

	
	$(".carousel").removeClass("hidden");
	$('.left.carousel-control').hide();

	var executeButton = ` <a id="launch-code" class="right carousel-control" href="${results.destination}">Execute Code</a>`
	$('.left.carousel-control').after(executeButton);

	 // $(".walkthrough").append(stuff);


}

//End Nice Fetch

function badFetch(error){
	console.log(error)
	console.log("potato4")
}

//End Bad Fetch

function hideButton(){
	$(".launch-btn").html("<div class='launch-btn'>Loading Page...</div>");
}

// function checkSlide()                        // check function
// {

// 	console.log("Check slide being called");
//   var $this = $('#text-carousel');

//   if($('.carousel-inner .item:first').hasClass('active')) {
//   	console.log("First item being identified");
//     $this.children('.left.carousel-control').hide();
//   } else if($('.carousel-inner .item:last').hasClass('active')) {
//   	console.log("Second else statement");
//   	$(".execute-button").show();
//     $this.children('.right.carousel-control').hide();
//   } else {
//   	console.log("Final Else statement");
//   	$(".execute-button").hide();
//     $this.children('.carousel-control').show();

//   } 
// }

//End Check Slide



});