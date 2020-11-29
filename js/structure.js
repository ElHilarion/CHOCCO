$('#page-link-1, #page-link-2').mouseover(function () {
  $('.structure__block').css({
    'opacity': 1,
    'pointer-events': 'auto'
  });
});

$('.structure__block').mouseleave(function () {
  $(this).css({
    'opacity': 1,
    'pointer-events': 'auto'
  });
});

$('#page-link-1, #page-link-2').mouseout(function () {
  $('.structure__block').css({
    'opacity': 0,
    'pointer-events': 'none'
  });
});



