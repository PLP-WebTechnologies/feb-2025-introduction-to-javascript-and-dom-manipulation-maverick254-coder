function changeText() {
    const text = document.getElementById('dynamic-text');
    text.textContent = " You've changed the text with JavaScript!";
    text.style.color = 'crimson';
  }
  
  function toggleHighlight() {
    const text = document.getElementById('dynamic-text');
    text.classList.toggle('highlight');
  }
  
  function addOrRemoveElement() {
    const container = document.getElementById('container');
    const existingElement = document.getElementById('new-element');
  
    if (existingElement) {
      container.removeChild(existingElement);
    } else {
      const newEl = document.createElement('div');
      newEl.id = 'new-element';
      newEl.textContent = '✨ New element added!';
      newEl.style.padding = '10px';
      newEl.style.marginTop = '10px';
      newEl.style.border = '1px solid #ccc';
      container.appendChild(newEl);
    }
  }
  