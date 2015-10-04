(function ($, root) {

  if (!$) {
    throw Error('jQuery is required.')
  }

  // Makes the given element cycle through rainbow colors!
  function makeRainbow(element) {
    var $element = $(element);
    var index = 0;
    var speed = $element.data('speed') || 1;
    var colors = ['red', 'orange', 'green', 'indigo'];

    function changeColor() {
      index = index >= colors.length ? 0 : index;
      $element.css('color', colors[index++]);
      setTimeout(changeColor, speed * 1000);
    }

    // make sure the element has the right styles
    $element.css('transition', 'color ' + speed + 's');

    // use setTimeout() or else the first color change will not be
    // animated. https://www.youtube.com/watch?v=8aGhZQkoFbQ
    changeColor();
  }

  $('[data-rainbow]').each(function (element) {
    makeRainbow(element);
  });

})(this.jQuery, this);
