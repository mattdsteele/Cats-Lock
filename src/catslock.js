(function($) {
  $.fn.catsLock = function(options) {
    var defaults = { source: 'placekitten' };
    var opts = $.extend({}, defaults, options);

    var mappings = {
      'placekitten' : 'http://placekitten.com',
      'placesheen' : 'http://placesheen.com',
      'placedog' : 'http://placedog.com'
    };

    var base = mappings[opts.source];

    var catLock = function(img) {
        $(img).attr('src', base + '/' + img.width + '/' + img.height);
    };

    return this.each(function() {
      if (this.nodeName.toLowerCase() === 'img') {
        catLock(this);
      } else {
        $(this).find('img').each(function() {
          catLock(this);
        });
      }
    });
  };

})(jQuery);
