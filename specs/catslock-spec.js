

describe("Cats lock jQuery plugin", function() {
  var $pic;
  beforeEach(function() {
    $pic = $('<img src="http://ojug.org/picture1.png" width="500" height="200" />');
  });

  it("is defined as a jQuery plugin", function() {
    expect(jQuery.fn.catslock).toBeDefined();
  });

  it("converts the src of an image to cats", function() {
    $pic.catslock();

    expect($pic[0].src).toMatch(/placekitten.com/);
  });


  it("uses the real height and width", function() {
    $pic.catslock();

    expect($pic[0].src).toMatch(/placekitten.com\/500\/200/);
  });

  it("is usable for people who hate cats", function() {
    $pic.catslock({ source: 'dogs' });
    expect($pic[0].src).toMatch(/placedog.com/);
  });

  it("can show way too many charlie sheens", function() {
    $pic.catslock({ source: 'winning' });
    expect($pic[0].src).toMatch(/placesheen.com/);
  });

  it("has a sane default", function() {
    $pic.catslock({ source: 'ojug' });
    expect($pic[0].src).toMatch(/placekitten.com/);
  });

  it("works with any children of the selected element", function() {
    var $html = $('<div><img src="http://ojug.org/1.jpg" /><img src="http://ojug.org/2.jpg" /></div>');
    $html.catslock();
    $html.find('img').each(function() {
      expect(this.src).toMatch(/placekitten/);
    });
  });
});
