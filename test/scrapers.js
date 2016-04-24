'use strict';

var expect = require('chai').expect;
var fs     = require('fs');
var MTG    = require('../scrapers').MTG;

describe('MTG scraper', function() {
  describe('.parseCard', function() {
    context('When there HTML file describes a two sided card', function() {
      var html;
      beforeEach(function(done) {
        fs.readFile('./test/data/dual_sided_test.html', 'utf8', function(err, data) {
          expect(err).to.not.exist;

          html = data;

          done();
        });
      });

      it('parses the card data', function(done) {
        expect(html).to.exist;
        var MTGScraper = new MTG();
        var cardData = MTGScraper.parse(html);

        expect(cardData.types).to.equal("Creature  — Human Insect");
        expect(cardData.name).to.equal("Aberrant Researcher");
        done();
      });
    });

    context('When the html describes one card', function() {
      it.skip('parses the data of the card', function(done) {
      });
    });
  });
});
