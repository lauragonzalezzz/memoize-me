var MemoizeMe = function(input){
  var cache = [];


  if (cache.indexOf(input) !== -1){
    index = cache.indexOf(input);
    return cache[index];
  }
  else if (document.getElementById(input) !== undefined){
    console.log('Element not found in cache, checking index');
    cache.push(document.getElementById(input));
    console.log('cache',cache);
    return document.getElementById(input);
  }
  else {
    return "Please choose a valid element.";
  }
};

//make into revealing module pattern
//get, show, clear