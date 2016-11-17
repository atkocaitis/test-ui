/**
* Function to verify if element css properties are correct.
* @param  {string} element Element css selector
* @param  {object} layout Object with expected element size data
* @return {object} Return this object
*/

var checkLayoutCSS = function(element, layout) {
  for (var item in layout.css) {
    this.verify.cssProperty(element, item, layout.css[item]);
  };

  return this;
};

exports.command = checkLayoutCSS;