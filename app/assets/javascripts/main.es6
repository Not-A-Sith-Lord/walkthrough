console.log("Main JS loading");




$(document).ready(function(){


	$(".launch-btn").on("click", function(){
		event.preventDefault();
		
		$.ajax({
			type: "GET",
			url: "/api/paths/1",
			success: niceFetch,
			error: badFetch
		})

	});
// End Doc Load


function niceFetch(results){
	console.log(results)
	console.log("potato")
	hideButton();

	var stuff = []; 

	results.forEach(function(object){

		var content = object.content;
		var styledContent = `<li class="stack__item">${content}</li>`;
		stuff.push(styledContent);
	});

	//stuff = [content1, content2, content3, etc.]

	stuff.forEach(function(code){
		console.log(code);
	});
	 $(".stack").append(stuff)
}

//End Nice Fetch

function badFetch(error){
	console.log(error)
	console.log("potato4")
}

//End Bad Fetch

function hideButton(){
	$(".launch-btn").hide();
	$(".js-attach").append("<div class='launch-btn'>Loading Page...</div>");

}



});