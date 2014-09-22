javascript:(function(){
  document.body.innerHTML = clean(document.body.innerHTML);

  function clean (text) {
    var dictionary = { people: 'bears', humans: 'bears', person: 'bear', human: 'bear', mankind: 'bearkind'},
          regexp = RegExp ('\\b(' + Object.keys (dictionary).join ('|') + ')\\b', 'ig');

    return text.replace (regexp, function (_, word) {
      _ = dictionary[word.toLowerCase ()];
      if (/^[A-Z][a-z]/.test (word))
        _ = _.slice (0,1).toUpperCase () + _.slice (1);
      else if (/^[A-Z][A-Z]/.test (word))
        _ = _.toUpperCase ();
      return _;
    });
  }
}
