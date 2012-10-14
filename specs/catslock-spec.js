describe("Cats Lock Bookmarklet", function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '/specs/fixtures';
  });

  it("is a jquery plugin", function() {
    expect(typeof(jQuery.fn.catsLock)).toEqual('function');
  });

  describe("With simple data", function() {
    var $data;
    beforeEach(function() {
      loadFixtures('simple.html');
      $data = $('img');
    });

    describe("With defualt settings", function() {
      it("runs on an image", function() {
        $data.catsLock();
        expect($data.attr('src')).toMatch(/^http:\/\/placekitten.com/);
      });

      it("sets the right width & height", function() {
        $data.catsLock();
        expect($data.attr('src')).toMatch(/200\/300/);
      });
    });

    it("can show placedog", function() {
      $data.catsLock({ source: 'placedog' });
      expect($data.attr('src')).toMatch(/placedog/);
    });

    it("has placesheen", function() {
      $data.catsLock({ source: 'placesheen' });
      expect($data.attr('src')).toMatch(/placesheen.com/);
    });

  });

  it("runs on all images below selected element", function() {
    loadFixtures('complex.html');
    var $data = $('div');
    $data.catsLock();

    expect($data.attr('src')).toBeUndefined();
    $data.find('img').each(function() {
      expect($(this).attr('src')).toMatch(/placekitten/);
    });
  });

  xit("can use other placeholder formats");
});
