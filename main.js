function throughOnce(fn) {
  var currentCount = 1;
  return function() {
    if (currentCount % 2 == 1) {
      fn.apply(null, arguments);
      return currentCount++;
    } else {
      return currentCount++;
    }
  };
}

var logThroughOnce = throughOnce(function(text) {
  console.log(text);
});

logThroughOnce("Hello World1!");// "Hello World!"
logThroughOnce("Hello World2!");//
logThroughOnce("Hello World3!");// "Hello World!"
logThroughOnce("Hello World4!");//
logThroughOnce("Hello World5!");// "Hello World!"
logThroughOnce("Hello World6!");//
