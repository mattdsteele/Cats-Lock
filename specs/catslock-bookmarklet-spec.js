describe("Cats Lock Bookmarklet", function() {
  it("is a jquery plugin", function() {
    expect(typeof(jQuery.fn.catsLock)).toEqual('function');
  });

  it("runs on an image", function() {
    var data = '<img src="http://example.com/image.jpg" />';
    $(data).catsLock();

    expect($(data).attr('src')).toMatch(/$http:\/\/placekitten.com/);
  });

  xit("runs on all images below selected element");

  xit("can show placedog");
  xit("has placesheen");

  xit("can use other placeholder formats");
});
