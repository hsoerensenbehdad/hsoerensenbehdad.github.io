document.addEventListener("DOMContentLoaded", function() {
  const dynamicText = document.getElementById("dynamic-text");
  const wordsArray = ["en student", "kreativ", "en søtnos", "en kjernekar","interesset i film", "en liten komiker", "musikk-lytter",  "dødslig redd for fremtiden.", "arbeidsledig", "entusiaist for feminist literatur","6'7", "en ivrig lytter til dj-sett", ];
  let currentIndex = 0;

  function changeText() {
      dynamicText.textContent = "Herman er " + wordsArray[currentIndex];
      currentIndex = (currentIndex + 1) % wordsArray.length;
  }
  setInterval(changeText, 1000);

  const body = document.body;
  const lightModeButton = document.querySelector(".light");
  const darkModeButton = document.querySelector(".dark");

  lightModeButton.addEventListener("click", function() {
      body.id = "theme-light";
  });

  darkModeButton.addEventListener("click", function() {
      body.id = "theme-dark";
  });

  const lightModeLink = document.getElementById("lightModeLink");
  const darkModeLink = document.getElementById("darkModeLink");

  lightModeLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      body.id = "theme-light";
  });
  darkModeLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      body.id = "theme-dark";
  });
});

document.getElementById('yes').addEventListener('click', function() {
    showOutput('Perfekt!');
});
document.getElementById('no').addEventListener('click', function() {
    showOutput('Kill yourself.. now!');
});
function showOutput(message) {
    document.getElementById('output').innerHTML = message;
}

