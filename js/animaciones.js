let radius = 100; 
let fields = $('.item'),
  container = $('#container'),
  width = container.width(),
  height = container.height();
let angle = 0,
  step = (2 * Math.PI) / fields.length;
fields.each(function() {
  let x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
  let y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
  if (window.console) {
    console.log($(this).text(), x, y);
  }
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });
  angle += step;
});