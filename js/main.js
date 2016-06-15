window.tweets = [], window.currentTweet = false;

$(function() {
  $.getJSON('data/blazersmikerice_tweets.json', function(d) {
    console.log(d);
    window.tweets = d;
    updateTweet();
  });

  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      updateTweet();
    }
  }
});

function updateTweet() {
  if (window.tweets.length) {
    window.currentTweet = window.tweets[Math.floor(Math.random()*window.tweets.length)];
    setDom();
  }
}

function setDom() {
  $('#tweet').html(window.currentTweet.text);
}
