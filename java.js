document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamic-text");
    const wordsArray = ["en student", "kreativ", "en søtnos", "en kjernekar", "en liten komiker", "6'7", "dødslig redd for fremtiden.", "arbeidsledig"];
    let currentIndex = 0;
  
    function changeText() {
      dynamicText.textContent = "Jeg er " + wordsArray[currentIndex];
      currentIndex = (currentIndex + 1) % wordsArray.length;
    }
    setInterval(changeText, 500);
  });
