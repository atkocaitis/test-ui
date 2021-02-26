var log = function(message, type) {

  this.perform(() => {
    if (this.globals.testFlowlogsEnabled)
    console.log(message);
  });

  return this;
};

exports.command = log;
