

$(document).ready(function() {

  var quote;
  var author;

  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
      jsonp: 'jsonp',
      dataType: 'jsonp',
  
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $("#quote").text(quote);
        if (author) {
          $("#author").text(" - " + author);
        } else {
          $("#author").text("- unkown");
        }
      }
    });
  }
  getNewQuote();

  $(".get-quote").on("click", function() {
     // event.preventDefault();
     getNewQuote();
  });

  $(".share-quote").on("click", function() {     
     window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + '  ---' + author));
  });
});



