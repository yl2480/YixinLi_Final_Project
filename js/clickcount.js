function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var count = 0;

$('.like').click(function() {
  count = count + 1;
  $('.currentCount').text(count)
});

$('li').mouseover(function() {
	var text = $(this).text()
	console.log('you moused over ' + text);
});
