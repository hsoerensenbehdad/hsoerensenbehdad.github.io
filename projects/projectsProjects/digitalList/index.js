//fikser bakgrunnsfarge til elementet, overflødig men en mann som meg liker slik
function addBackgroundColor() {
  //checker det brukeren velger og velger den valuen, så endrer på stylen til lista 
  var colorRadio = document.querySelector('input[name="color"]:checked');
  var selectedColor = colorRadio ? colorRadio.value : "";
  var categoryElement = document.getElementById('listcontainer');
  categoryElement.style.backgroundColor = selectedColor;
}
var colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', addBackgroundColor);

//lurt å ha liste array med definer utenfor function??
var list = [
  {
    author: "Jesus Krsitus",
    date: "0032-15-12",
    quote: "I am the Alpha and the Omega."
  }
  ,{
    author: "MLK",
    date: "1962-08-28",
    quote: "I have a dream."
  }
  ,{
    author: "Ice Spice",
    date: "2022-7-8",
    quote: "U thought i was feelin u."
  }
];

function addElement() {
  /*hent info fra inputs.
  legg inn i nytt objekt inn i list.
  */
  let authorInput = document.getElementById('author');
  let dateInput = document.getElementById('date');
  let quoteInput = document.getElementById('quote');

  let newQuote = {
    author: authorInput.value,
    date: dateInput.value,
    quote: quoteInput.value
  };

  list.push(newQuote);
  showQuotes();
  authorInput.value = "";
  dateInput.value = "";
  quoteInput.value = "";
} 

function showQuotes(){
  document.getElementById("listcontainer").innerHTML = "";
  list.forEach(quoteObject => {
    let divEl = document.createElement("div");
    divEl.innerText = quoteObject.author + ", " + quoteObject.date + " : " + quoteObject.quote ;
    document.getElementById("listcontainer").appendChild(divEl);
  });
}
showQuotes();

function sortQuote(){
  document.getElementById("listcontainer").innerHTML = "";
  list.forEach(quoteObject => {
    let divEl = document.createElement("div");
    divEl.innerText = quoteObject.quote + ": "  + "Sagt av " + quoteObject.author + ", " + quoteObject.date;
  document.getElementById("listcontainer").appendChild(divEl);
  });
}
function sortAuthor() {
  document.getElementById("listcontainer").innerHTML = "";
  list.forEach(quoteObject => {
    let divEl = document.createElement("div");
    divEl.innerText = quoteObject.author + ": " + quoteObject.quote + ", " + quoteObject.date;
  document.getElementById("listcontainer").appendChild(divEl);
  });
  
}
function sortDate(){
  document.getElementById("listcontainer").innerHTML = "";
  list.forEach(quoteObject => {
    let divEl = document.createElement("div");
    divEl.innerText = quoteObject.date + ": " + quoteObject.quote +"- " + quoteObject.author  ;
  document.getElementById("listcontainer").appendChild(divEl);
  });
}


var buttonClick = document.getElementById('buttonClick');
buttonClick.addEventListener('click', addElement);

var buttonQuote = document.getElementById('sortQuote');
buttonQuote.addEventListener('click', sortQuote);

var buttonAuthor = document.getElementById('sortAuthor');
buttonAuthor.addEventListener('click', sortAuthor);  

var buttonDate = document.getElementById('sortDate');
buttonDate.addEventListener('click', sortDate);

var buttonarchive = document.getElementById('sortarchive');
buttonarchive.addEventListener('click', sortArchive);    

