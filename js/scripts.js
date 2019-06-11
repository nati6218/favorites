
$(document).ready(function() {
  $(".favorite form").submit(function(event) {

  var sport = $("input#sport").val();
  var food = $("input#food").val();
  var music = $("input#music").val();

  event.preventDefault();

  var array = [sport, food, music]
  var index1 = array[1]
  var index2 = array[0]
  var index3 = array[2]

  var array2 = []
  array2.push(index1)
  array2.push(index2)
  array2.push(index3)
  $("ul").append("<li>" + array2[0] + "</li>");
  $("ul").append("<li>" + array2[1] + "</li>");
  $("ul").append("<li>" + array2[2] + "</li>");
});
});
