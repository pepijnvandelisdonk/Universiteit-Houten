document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const query = document.getElementById('search-bar').value.toLowerCase();
    const bodyText = document.body.innerText.toLowerCase();
  
    if (bodyText.includes(query)) {
      alert('Resultaten gevonden!');
    } else {
      alert('Geen resultaten gevonden.');
    }
  });