
document.getElementById("FeedBackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    /* Get input elements */
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("emailAdd").value;

    var feedback = document.getElementById("feedback");
    if (fname && lname && email) {
        // Redirect to confirmation.html after 1 seconds
        setTimeout(function() {
            window.location.href = "confirmation.html?success=true";
        }, 1000);
    } else { /* Error message */
        feedback.innerHTML = "Please fill in all fields.";
        feedback.className = "error";
    }
});
