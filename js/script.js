var message = "";
var randomNumber = 2;
//var backGroundColor = "#2f3e56";
//var backGroundColor2 = "#36b55c";
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//document.getElementById('body').background-color = backGroundColor2;
setInterval(printQuote,10000);

function printQuote(){
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = getRandomQuote();
  document.body.style.setProperty("background-color",getRandomColor());
}

function getRandomQuote(){
  randomNumber = getRandom(quotes.length,0);
  console.log(randomNumber);
  message = "<p class='quote'>"+ quotes[randomNumber].qText + '</p>';
  message += '<p class="source">' + quotes[randomNumber].qFrom + '</p>';
  return message;
}

function getRandomColor(){
  var storeColor = colors[getRandom(colors.length,0)];
  return storeColor;
}

function getRandom(upperNumber,lowNumber){
  return(Math.floor(Math.random() * (upperNumber) + lowNumber));
}
