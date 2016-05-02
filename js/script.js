jQuery(document).ready(function() {
// Your code goes here...

	$('.changeText').on('click', function() {
	// runs when any button is clicked
	
	var str = $(".userText").val();
	if (str.length == 0){
			
			alert("Please enter text.");
		
		}
	var first_letter = str.match(/[,.!?;:]|\b(\w)/g);           
	var answer = first_letter.join(' ');
	
			$(".result").val(answer);
			
	});
	
	$('.hideText').on('click', function() {
		
		$(".userTextLabel").toggle();
		$(".userText").toggle();
		if ($('.userText').is(':hidden')){
			$('.hideText').text("Show Original Text");	
		} else {
			$('.hideText').text("Hide Original Text");
	      }
		
	});
});