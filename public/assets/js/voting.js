
QUESTIONS = $('.voting').children();
NUMBER_OF_QUESTIONS = QUESTIONS.length
TARGET_THRESHOLD = NUMBER_OF_QUESTIONS * 0.7

console.log(QUESTIONS);
console.log(NUMBER_OF_QUESTIONS);
images_clicked = 0
total_image_weighting = 0

NON_HIPSTER_ANSWERS = ['<img src="/assets/img/voting/non-hipster.jpg" class="img-thumbnail">']
HIPSTER_ANSWERS = ['Welcome, redirect to main site']

$('#vote_count').html(NUMBER_OF_QUESTIONS)

showQuestion(0)

$('.questions a').on('click', function (e) {
	image_weighting = e.currentTarget.getAttribute('data-image-rating');
	total_image_weighting += parseFloat(image_weighting)
	images_clicked += 1
	showQuestion(images_clicked)
	$('#vote_count').html(NUMBER_OF_QUESTIONS - images_clicked)
	console.log(total_image_weighting)

	if(images_clicked == NUMBER_OF_QUESTIONS) {
		var allowedIn = checkAllowedIn(total_image_weighting);
		showEnd(allowedIn);
	}
})

function checkAllowedIn(total_image_weighting) {
	if(total_image_weighting >= TARGET_THRESHOLD){
		return true
	} else {
		return false
	}
}

function showQuestion(index) {
	$.each(QUESTIONS, function( key, value ) {
		if( key == index) {
			console.log(index);
			jQuery(value).show();
		} else {
			console.log(index);
			jQuery(value).hide();
		} 
	});
}

function showEnd(allowedIn) {
	if(allowedIn) {
		console.log('redirect');
		window.location.replace("/feed");
		// var hipster_answer = HIPSTER_ANSWERS[Math.floor(Math.random()*HIPSTER_ANSWERS.length)];
		// $('.end-voting h3').html(hipster_answer);
	} else {
		console.log('dont redirect');
		var non_hipster_answer = NON_HIPSTER_ANSWERS[Math.floor(Math.random()*NON_HIPSTER_ANSWERS.length)];
		$('.end-voting').html(non_hipster_answer);
		$('.voting-question').hide();
	}
}