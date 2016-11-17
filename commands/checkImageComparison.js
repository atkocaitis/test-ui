var imageDiff = require('image-diff');
var PNGCrop = require('png-crop');

/**
* Function to create screenshot of specific element in the page and save it to actualElement.png
* @param  {object} config Object with element coordinates in screen and path to screenshots folder
* @return {object} Return promise
*/
var createElementScreenshot = function(config) {
  return new Promise((resolve, reject) => {
    PNGCrop.crop(config.path + 'screenshot.png', config.path + 'actualElement.png', config, (err) => {
      if (err) throw reject(err);
      resolve();
    });    
  });
};

/**
* Function to compare difference in percentage of two images
* @param  {string} image File name of the correct image
* @param  {string} path Path to screenshots folder
* @return {object} Return promise with difference in percentage
*/
var compareScreenshot = function(image, path) {
  return new Promise((resolve, reject) => {
    imageDiff.getFullResult({
      actualImage: path + 'actualElement.png',
      expectedImage: path + image,
      diffImage: path + 'difference.png',
    }, (err, result) => {
      if (err) reject(err)
      else resolve(result.percentage);
    });   
  });
};

/**
* Function to compare actual element screenshot with correct element screenshot
* @param  {string} element Element css selector
* @param  {object} testWith Object with correct element screenshot filename and allow Diff in percentage.
* @return {object} Return promise with difference in percentage
*/
var checkImageComparison = function(element, testWith) {
  return new Promise((resolve, reject) => {
    this.saveScreenshot(this.globals.default.screenshots + 'screenshot.png');

    this.getLocationInView(element, (location) => {
      this.getElementSize(element, (size) => {
        this.config = {
          width: size.value.width, 
          height: size.value.height, 
          top: location.value.y, 
          left: location.value.x,
          path: this.globals.default.screenshots
        };

        createElementScreenshot(this.config).then(() => {
          return compareScreenshot(testWith.image, this.config.path);
        }).then((diff) => {
          this.verify.ok(diff < testWith.allowDiff, 'Element image comparison');
          resolve(diff);
        });
      });
    });
  });
};

exports.command = checkImageComparison;