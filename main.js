document.addEventListener("DOMContentLoaded", function() {
  const text = "Mês do Consumidor";
  const background = document.querySelector(".background");

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  
  const textWidth = 200; // largura aproximada do texto em pixels
  const textHeight = 24; // altura aproximada do texto em pixels

  const numColumns = Math.ceil(windowWidth / textWidth);
  const numRows = Math.ceil(windowHeight / textHeight);

  for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numColumns; j++) {
          const newText = document.createElement("div");
          newText.textContent = text;
          newText.classList.add("text");
          newText.style.left = j * textWidth + "px";
          newText.style.top = i * textHeight + "px";
          background.appendChild(newText);
      }
  }
});
