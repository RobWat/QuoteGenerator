var quotes =[
  "Yo, You  be loved dog",
  "YYEEETTT",
  "Henry and Jace be lit dogs",
  "Ur life be beautiful dog",
  "Yo Yo Yo, you be a beautiful woman who deserves respect and love"
]

function newQuote(){
  // alert('watttssuuuupppp')
  var randNum = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quoteDisplay').innerHTML = quotes[randNum]
}