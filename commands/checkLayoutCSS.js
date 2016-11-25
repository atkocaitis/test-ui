'use strict'

/**
* Function to verify if element css properties are correct.
* @param  {string} element Element css selector
* @param  {object} layout Object with expected element size data
* @return {object} Return this object
*/
var checkLayoutCSS = function(element, layout) {
  for (let item in layout.css) {
    this.getCssProperty(element, item, (result) => {
      if (layout.css[item].indexOf('rgb') !== -1) {
        this.verify.equal(rgb2hex(result.value), rgb2hex(layout.css[item]));
      } else {
        this.verify.equal(result.value, layout.css[item]);
      }
    });
  };

  return this;
};

/**
* Function to convert color code rgb/rgba to hex.
* @param  {string} rgb Color code in rgb/rgba
* @return {string} Return color in hex
*/
var rgb2hex = function(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};

exports.command = checkLayoutCSS;