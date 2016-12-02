console.log("Main JS loading");




$(document).ready(function(){



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

	var stuff = []; 

	results.forEach(function(object){
		stuff.push(object.content)
		$(".walkthrough").append(stuff)

	});

	// $(".walkthrough").append(stuff)
}

function badFetch(error){
	console.log(error)
	console.log("potato4")
}



});