// console.log("Main JS loading");
 
$(document).on('turbolinks:load',function(){

	$(".js-home").on("click", function(){
		hideButton();
		$.ajax({
			type: "GET",
			url: "/api/paths/1",
			success: niceFetch,
			error: badFetch
		})

	});

});