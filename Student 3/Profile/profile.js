function nextStep(step) {
    // Hide all form steps
    var formSteps = document.querySelectorAll('.form-step');
    formSteps.forEach(function(step) {
        step.style.display = 'none';
    });
  
    // Show next step
    var nextStep = document.getElementById('step-' + step);
    if (nextStep) {
        nextStep.style.display = 'block';
    }
  
    // Update progress bar
    var progressBar = document.getElementById('progress-bar');
    if (step === 1) {
        progressBar.style.width = '0%';  // Reset progress if going back to step 1
    } else if (step < 6) {
        var progress = (step - 1) * 25;   // Calculate progress based on step number
        progressBar.style.width = progress + '%';
    } else {
        progressBar.style.display = 'none';   // Hide progress bar if step is beyond the form
    }

    // Update progress text
    var progressText = 'Completion: ' + progress + '%';
    var progressTextElement = document.getElementById('progress-text');
    progressTextElement.textContent = progressText;
  
    // Process information on step 5
    if (step === 5) {
        var all = document.querySelector('#step-5');    // Get step 5 element

        var name = document.getElementById('name').value;
        var surname = document.getElementById('surname').value;
        var age = document.getElementById('age').value;
        var gender = document.getElementById('gender').value;

        var address = document.getElementById('address').value;
        var contact = document.getElementById('contact').value;
        var email = document.getElementById('email').value;
        var nic = document.getElementById('nic').value;

        var chronic = document.getElementById('chronic').value; // Corrected the ids
        var allergies = document.getElementById('allergies').value;
        var genetic = document.getElementById('genetic').value;
        var previous = document.getElementById('previous').value;

        var location = document.getElementById('location').value;
        var communication = document.getElementById('communication').value;
        var note = document.getElementById('note').value;
      

        // Create HTML elements to display the retrieved information
        var fifthFormContent = `
            <h2>Details from Previous Forms</h2>
            <br><br>

            <p><b>Name: </b><i>${name}</i></p>
            <p><b>Surname: </b><i>${surname}</i></p>
            <p><b>Age: </b><i>${age}</i></p>
            <p><b>Gender: </b><i>${gender}</i></p>

            <p><b>Address: </b><i>${address}</i></p>
            <p><b>Contact no: </b><i>${contact}</i></p>
            <p><b>Email: </b><i>${email}</i></p>
            <p><b>NIC no: </b><i>${nic}</i></p>

            <p><b>Chronic conditions? </b><i>${chronic}</i></p> 
            <p><b>Allergies: </b><i>${allergies}</i></p>
            <p><b>Genetic conditions or diseases: </b><i>${genetic}</i></p>
            <p><b>Previous surgeries or hospitalizations: </b><i>${previous}</i></p>

            <p><b>Preferred location: </b><i>${location}</i></p>
            <p><b>Method of communication: </b><i>${communication}</i></p>
            <p><b>Additional notes: </b><i>${note}</i></p>

            <div class="but">
                <button><a href="../../Student 2/Home/home.html">Back to home</a></button>
            </div>
             
        `;

        // Insert the HTML content into the fifth form
        all.innerHTML = fifthFormContent;
    }
}