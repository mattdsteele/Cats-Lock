(function($) {
  $.fn.catsLock = function() {
    return this.each(function() {
      if (this.nodeName.toLowerCase() === 'img') {
        $(this).attr('src', 'http://placekitten.com/144/155');
      } else {
        $(this).find('img').each(function() {
          $(this).attr('src', 'http://placekitten.com/144/155');
        });
      }
    });
  };
})(jQuery);
