// console.log("Main JS loading");


$(document).ready(function(){


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
	hideButton();

	var stuff = [];
	var i = 0;

	results.forEach(function(object){
		var content = object.content;

		var styledContent;
		if (i == 0){
			 styledContent = ` <div class="item active">
                    <div class="carousel-content">
                        <div>
                        	<code>
                            ${content}
                            </code>
                        </div>
                    </div>
                </div>`;
                i = i + 1;
                console.log(i);

		} else {
			 styledContent = ` <div class="item">
                    <div class="carousel-content">
                        <div>
                        	<code>
                            ${content}
                            </code>
                        </div>
                    </div>
                </div>`;
		}
		
		$(".carousel-inner").append(styledContent);
		// stuff.push(styledContent);
	});
	

	
	$(".carousel").removeClass("hidden");

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



});