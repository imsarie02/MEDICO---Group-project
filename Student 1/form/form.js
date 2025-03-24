document.getElementById("payment-Method").addEventListener("change", function() { //event listener to to changes in payment method
    var payment_Method = this.value;//retrieve the method from the dropdown menu
    var cardDetails = document.getElementById("cardDetails"); //geting an element to contain card details

    if (payment_Method === "credit-Card") {// payment method is cradit-card 
        cardDetails.style.display = "block";//display card details
    } else {
        cardDetails.style.display = "none";//else hide it
    }
});

document.getElementById("check-out-Form").addEventListener("submit", function(event) { //event listener for form submit
    event.preventDefault();
    
    //retrieve form feild values
    var full_Name = document.getElementById("full-Name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var payment_Method = document.getElementById("payment-Method").value;
    var card_Number = document.getElementById("card-Number").value;
    var cardholder_Name = document.getElementById("card-holder-Name").value;
    var expiry_Date = document.getElementById("expiry-Date").value;
    var ccv = document.getElementById("ccv").value;

    var feedback = document.getElementById("feedback");//getting an elment to display the validation massages
    var is_Valid = true;

    // Reset previous feedback
    feedback.innerHTML = "";
    feedback.className = "";

    // Validation part
    if (!full_Name || !email || !phone || !address || !payment_Method) {//if user didn't fill or filled as wrong., it will display error massage
        feedback.innerHTML = "Please fill in all required fields.";
        feedback.className = "error";
        is_Valid = false;
    } else if (payment_Method === "credit-Card") {
        var cardRegex = /^\d{16}$/; // Assuming card number is 16 digits
        if (!cardRegex.test(card_Number)) {
            feedback.innerHTML = "Please enter a valid card number.";
            feedback.className = "error";
            is_Valid = false;
        } else if (cardholder_Name.trim() === "") {//check the field filled or not
            feedback.innerHTML = "Please enter the cardholder's name.";
            feedback.className = "error";
            is_Valid = false;
        } else if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(expiry_Date)) {//chechk the date is correct or wrong
            feedback.innerHTML = "Please enter a valid expiry date (MM/YYYY).";
            feedback.className = "error";
            is_Valid = false;
        } else if (!/^\d{3}$/.test(ccv)) {//check the ccv has 3 numbers and each number need to be above 10
            feedback.innerHTML = "Please enter a valid CCV.";
            feedback.className = "error";
            is_Valid = false;
        }
    }

    if (is_Valid) {
        ///when form is filled correctly,it will display above
        feedback.innerHTML = "Form submitted successfully!";
        feedback.className = "success";
        // You can add AJAX call or other actions here to handle form submission
    }
});
