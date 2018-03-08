// I stole this from: https://stackoverflow.com/questions/16240892/jquery-change-button-color-onclick
// $('input[type="submit"]').click(function(){
//     if(!$(this).hasClass('red'))
//           $(this).addClass('red');
// });
// listen for click on the header color change button
// $('.like').click(function() {
//   // alert('do not ever use alert()!')
//   $('#header').css('background', getRandomColor())
//
// })

// helper function for generating 6-character hex string
// I stole this from: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var count = 1;

$('.like').click(function() {
  count = count + 1;
  $('.currentCount').text(count)
});

$('li').mouseover(function() {
	var text = $(this).text()
	console.log('you moused over ' + text);
});

// var thingsILike = ['Burritos', 'Urban Planning', 'Civic Tech', 'My kid', 'Kim Bap'];

// // to prove that jquery is really using the data in this array to insert elements, I will delay them by 1.5 seconds
// // setTimeout(function() {
//   thingsILike.forEach(function(thing) {
//     console.log(thing);
//
//     $('.like-list').append('<li>' + thing + '</li>')
//   })
// // }, 1500)
//
// // for loop
// for (var i=0; i< thingsILike.length; i++) {
//   console.log(i, thingsILike[i])
// }
