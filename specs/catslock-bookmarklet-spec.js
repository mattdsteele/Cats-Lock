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

  xit("can show placedog");
  xit("has placesheen");

  xit("can use other placeholder formats");
});
