
(function($) {
  $.fn.catslock = function(options) {
    var defaults = {
      source : 'cats'
    };

    var mappings = {
      'cats' : 'http://placekitten.com',
      'dogs' : 'http://placedog.com',
      'cage' : 'http://placecage.com/c',
      'winning' : 'http://placesheen.com'
    };
    options = $.extend({}, defaults, options);
    var url = mappings[options.source] || mappings['cats'];

    var catlock = function(node) {
      var w = node.width;
      var h = node.height;
      node.src = url + '/' + w + '/' + h;
    };
    return this.each(function() {
      if(this.nodeName.toLowerCase() === 'img') {
        catlock(this);
      } else {
        $(this).find('img').each(function() {
          catlock(this);
        });
      }
    });
  };
})(jQuery);
