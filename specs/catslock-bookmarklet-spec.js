describe("Cats Lock Bookmarklet", function() {
  it("is a jquery plugin", function() {
    expect(typeof(jQuery.fn.catsLock)).toEqual('function');
  });

  it("runs on an image", function() {
    var $data = $('<img src="http://example.com/image.jpg" />');
    $data.catsLock();

    expect($data.attr('src')).toMatch(/^http:\/\/placekitten.com/);
  });

  it("runs on all images below selected element", function() {
    var $data = $('<div class="wrapper"><img src="http://example.com/something.png" /><img src="http://example.com/2.png" /></div>');
    $data.catsLock();

    expect($data.attr('src')).toBeUndefined();
    $data.find('img').each(function() {
      expect($(this).attr('src')).toMatch(/placekitten/);
    });
  });

  it("can show placedog", function() {
    var $data = $('<img src="http://example.com/image.jpg" />');
    $data.catsLock({
      source: 'placedog'
    });

    expect($data.attr('src')).toMatch(/placedog/);
  });

  it("has placesheen", function() {
    var $data = $('<img src="http://example.com/image.jpg" />');
    $data.catsLock({
      source: 'placesheen'
    });

    expect($data.attr('src')).toMatch(/placesheen.com/);
  });

  it("sets the right width & height", function() {
    var $data = $('<img src="http://example.com/image.jpg" />');
    var data = $data.get(0);
    data.width = 200;
    data.height = 300;

    $data.catsLock();
    expect($data.attr('src')).toMatch(/200\/300/);

  });

  xit("can use other placeholder formats");
});
