
function displayConfirmationAndRedirect() {
    // Display the confirmation message
    var confirmationMessage = document.getElementById('message');
    confirmationMessage.style.display = 'block';
  
    // Redirect after 5 seconds
    setTimeout(function() {
      window.location.href = "../Home/home.html"; 
    }, 5000); // 5000 milliseconds = 5 seconds
  }
  
  // Call the function when the page is loaded
  window.onload = function() {
    displayConfirmationAndRedirect();
};
    