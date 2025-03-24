document.getElementById("prescriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var prescriptionFile = document.getElementById("prescriptionFile").files[0];
    if (!prescriptionFile) {
      showMessage("Please select a prescription file.");
      return;
    }
  
    setTimeout(function() {
      showMessage("Prescription uploaded successfully!");
      // Reset form after successful upload
      document.getElementById("prescriptionForm").reset();
    }, 2000);
  });
  
  function showMessage(message) {
    document.getElementById("message").innerText = message;
  }
  