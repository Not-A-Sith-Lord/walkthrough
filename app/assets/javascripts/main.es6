// console.log("Main JS loading");
 
$(document).on('turbolinks:load',function(){


	


	$(".launch-btn").on("click", function(){
		hideButton();
		$.ajax({
			type: "GET",
			url: "/api/paths/1",
			success: niceFetch,
			error: badFetch
		})

	});

	
// End Doc Load



//End Nice Fetch




});