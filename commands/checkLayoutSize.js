/**
* Function to verify if element size properties (width, height) are correct.
* @param  {string} element Element css selector
* @param  {object} layout Object with expected element size data
* @return {object} Return this object
*/

var checkLayoutSize = function(element, layout) {
  this.getElementSize(element, (result) => {
    for (var item in layout.size) {
      this.verify.equal(layout.size[item], result.value[item], 'Element ' + item + ' is not correct');
    };
  });

  return this;
};

exports.command = checkLayoutSize;