$('.like').click(function() {
  count = count + 1;
  $('.currentCount').text(count)
});

$('li').mouseover(function() {
	var text = $(this).text()
	console.log('you moused over ' + text);
});
