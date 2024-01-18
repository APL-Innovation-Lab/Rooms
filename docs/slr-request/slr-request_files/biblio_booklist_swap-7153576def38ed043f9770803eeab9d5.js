document.addEventListener("DOMContentLoaded", function() {
	console.log('booklist swap');
  // Find the div with id 'booklist_id'
  const booklistDiv = document.getElementById("booklist_id");
  
  if (booklistDiv) {
    // Get the booklist ID value from the div's text content
    const booklistId = booklistDiv.textContent.trim();
  
    // Create the iframe element
    const iframeElement = document.createElement("iframe");
  
    // Set iframe attributes
    iframeElement.setAttribute("src", `//austin.bibliocommons.com/list/list_browse/user/${booklistId}`);
    iframeElement.setAttribute("height", "315");
    iframeElement.setAttribute("width", "550");
    iframeElement.setAttribute("frameBorder", "0");
    iframeElement.setAttribute("scrolling", "no");
  
    // Replace the div with the new iframe
    booklistDiv.parentNode.replaceChild(iframeElement, booklistDiv);
  }
});
