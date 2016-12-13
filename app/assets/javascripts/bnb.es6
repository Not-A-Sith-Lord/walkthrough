
$(document).on('turbolinks:load', function(){

$("js-header").hover(function(){
	console.log("hovering");
	$(".bnb-header").toggleClass("highlight");
});

$("js-listing").hover(function(){
	console.log("hovering");
	$(".listing").toggleClass("highlight");
});

$("js-promotions").hover(function(){
	console.log("hovering");
	$("#js-promotions").toggleClass("highlight");
});

$("emailz").hover(function(){
	console.log("hovering");
	$("#emailz").toggleClass("highlight");
});

$("pwdz").hover(function(){
	console.log("hovering");
	$("#pwdz").toggleClass("highlight");
});

$("send").hover(function(){
	console.log("hovering");
	$("#send").toggleClass("highlight");
});




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
			url: "/api/paths/2",
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











