console.log("Main JS loading");




$(document).ready(function(){

function niceFetch(results){
	console.log(results)
	console.log("potato")
}

function badFetch(error){
	console.log(error)
	console.log("potato4")
}

	$(".launch-btn").on("click", function(){
		
		$.ajax({
			type: "GET",
			url: "/api/paths/1",
			success: niceFetch,
			error: badFetch
		})

	});
// End Doc Load





});