'use strict';

var cheerio = require('cheerio');

var MTG = function MTG() {};

MTG.prototype.parse = function(htmlText) {
  var $ = cheerio.load(htmlText);

  var cardData = {};

  var types = $(".value", "#ctl00_ctl00_ctl00_MainContent_SubContent_SubContent_ctl02_typeRow").text();
  cardData.types = types.replace(/^\W+/g, '');

  return cardData;
};

exports.MTG = MTG;
