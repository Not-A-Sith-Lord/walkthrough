
$(document).on('turbolinks:load', function(){

$('#bnb-Carousel').carousel({
    interval: 5000,
    wrap: true
}); 

$("#js-signup").on("click", function(){
		hideButton();
		$.ajax({
			type: "GET",
			url: "/api/paths/2",
			success: niceFetch,
			error: badFetch
		})

	});

$("#js-signup-submit").on("click", function(e){
	console.log("Logging the js sign up submit");
		e.preventDefault();
		hideButton();
		$.ajax({
			type: "GET",
			url: "/api/paths/3",
			success: function (results) {
				niceFetch(results);
				$("#launch-code").on("click", function(e){
					e.preventDefault();
					$("form").submit();
				});
			},
			error: badFetch
		})


	});

$("#js-login").on("click", function(){
		hideButton();
		$.ajax({
			type: "GET",
			url: "/api/paths/4",
			success: niceFetch,
			error: badFetch
		})

	});

$("#js-login-submit").on("click", function(e){
	console.log("Logging the js sign up submit");
		e.preventDefault();
		hideButton();
		$.ajax({
			type: "GET",
			url: "/api/paths/3",
			success: function (results) {
				niceFetch(results);
				$("#launch-code").on("click", function(e){
					e.preventDefault();
					$("form").submit();
				});
			},
			error: badFetch
		})


	});


$("#js-logout").on("click", function(){
		hideButton();
		$.ajax({
			type: "GET",
			url: "/api/paths/6",
			success: function (results) {
				niceFetch(results);
				$('#launch-code').attr('data-method', 'delete');
			},
			error: badFetch
		})

	});
		
});











