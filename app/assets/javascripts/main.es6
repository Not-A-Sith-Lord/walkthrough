// console.log("Main JS loading");


$(document).ready(function(){


	$(".launch-btn").on("click", function(){
		event.preventDefault();
		$(".controls").removeClass("hidden");
		
		$.ajax({
			type: "GET",
			url: "/api/paths/1",
			success: niceFetch,
			error: badFetch
		})

	});
// End Doc Load




	$(".launch-btn").on("click", function(){
		// event.preventDefault();
		
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

<<<<<<< HEAD
	results.forEach(function(object){
		stuff.push(object.content)
=======
	// results.forEach(function(object){
>>>>>>> e2b52e40fca385d535dac1c9b21d5b0da34c4515

	// 	var content = object.content;
	// 	var styledContent = `<li class="stack__item">${content}</li>`;
	// 	stuff.push(styledContent);
	// });

<<<<<<< HEAD
	 // $(".walkthrough").append(stuff)
}

// End niceFetch
=======
	// //stuff = [content1, content2, content3, etc.]

	// stuff.forEach(function(code){
	// 	console.log(code);
	// });
	//  $(".stack").append(stuff)
}

//End Nice Fetch

>>>>>>> e2b52e40fca385d535dac1c9b21d5b0da34c4515
function badFetch(error){
	console.log(error)
	console.log("potato4")
}
<<<<<<< HEAD
//End badFetch
=======

//End Bad Fetch

function hideButton(){
	$(".launch-btn").hide();
	$(".js-attach").append("<div class='launch-btn'>Loading Page...</div>");

}

>>>>>>> e2b52e40fca385d535dac1c9b21d5b0da34c4515


});