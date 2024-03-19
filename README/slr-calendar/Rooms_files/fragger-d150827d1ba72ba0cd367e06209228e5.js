console.log('fragger');
document.addEventListener("DOMContentLoaded", function() {
  // Find all elements with class "fragger"
  const fraggerLinks = document.querySelectorAll('.fragger');

  fraggerLinks.forEach(link => {
    
    link.style.display = 'inline-block'; 
      
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default action

      // Find the nearest parent with an ID
      let parent = event.target;
      while (parent && !parent.id) {
        parent = parent.parentElement;
      }

      if (parent && parent.id) {
        // Create the full URL with the fragment identifier
        const fullUrl = `${window.location.origin}${window.location.pathname}#${parent.id}`;

        // Copy to clipboard
        navigator.clipboard.writeText(fullUrl).then(() => {
					alert('Link copied to clipboard:\n' + fullUrl);
        }).catch(err => {
          console.error('Could not copy text: ', err);
        });
      }
    });
  });
});
