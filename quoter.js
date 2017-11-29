document.getElementById("quoteButton").addEventListener("click", getQuote);

// API call for forismatic
function getQuote(){
  var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
  let header = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
  });

  var request = new Request(url, {
    method: 'GET',
    headers: header,
    mode: 'cors',
    redirect: 'follow',
    cache: 'default'
  });

  fetch(request)
    .then ( response => response.json() )
    .then ( text => {
      var theQuote = text.quoteText;
      var theAuthor = text.quoteAuthor;
      document.getElementById("quoteArea").innerHTML ='"' + theQuote + '"<br /> - ' + theAuthor;
    })
    .catch( ( err) => {
      console.log('failure: ' + err)
    });
  }

