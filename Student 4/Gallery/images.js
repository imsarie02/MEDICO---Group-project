// Selecting DOM elements
let main_gallery = document.querySelector(".container-gallery");
let head = document.querySelector(".head");
const colorSelect = document.getElementById('colorSelect'); //Consant varibales
const sizeSelect = document.getElementById('sizeSelect');
const body = document.body;

// Event listener for changing background color
colorSelect.addEventListener('change', function() {
    body.style.backgroundImage = colorSelect.value;
});

// Event listener for changing font size
sizeSelect.addEventListener('change', function() {
    switch (sizeSelect.value) {
        case 'small':
            body.style.fontSize = '16px';
            break;
        case 'medium':
            body.style.fontSize = '18px';
            break;
        case 'large':
            body.style.fontSize = '20px';
            break;
        default:
            body.style.fontSize = '16px';
    }
});

// Function to display Pharmacy gallery
function showGallery1() {
    // Change heading
    head.innerHTML = `<h1>Pharmacy</h1>`;
    // Fade out main gallery
    main_gallery.style.opacity = '0';
    setTimeout(() => {
        // Remove gallery class and update content
        main_gallery.classList.remove("gallery");
        main_gallery.innerHTML =
            `
            <div class="sub-catergory">
                <p>Wellcome to our virtual pharmacy, where every click is a journey into health and wellness. Our carefully curated inventory is designed to simplify your shopping experience and meet all of your healthcare needs. Browse our wide selection of medications, all of which have been carefully selected from leading pharmaceutical manufacturers and have been verified for their quality and safety.</p>
                <img src="pharmacy_img/img1.jpg" alt="" width="350" height="250">
                <img src="pharmacy_img/img2.jpg" alt="" width="350" height="250">
                <img src="pharmacy_img/img3.jpg" alt="" width="350" height="250">
                <img src="pharmacy_img/img4.jpg" alt="" width="350" height="250">
                <img src="pharmacy_img/img5.jpg" alt="" width="350" height="250">
                <img src="pharmacy_img/img6.jpg" alt="" width="350" height="250">
            </div>

            <div class="buttons">
                <button onclick="back()">Back to categories</button>
            </div>
            `;
        // Fade in main gallery
        main_gallery.style.opacity = '1';
    }, 300);
}

// Function to display Staff gallery (similar structure to showGallery1)
function showGallery2() {
    // Change heading
    head.innerHTML = `<h1>Staff</h1>`;
    // Fade out main gallery
    main_gallery.style.opacity = '0';
    setTimeout(() => {
        // Remove gallery class and update content
        main_gallery.classList.remove("gallery");
        main_gallery.innerHTML =
            `
            <div class="sub-catergory">
                <p>Behind each prescription is our team of qualified pharmacists and health care professionals who are prepared to provide personalized advice and support. Trust us to guide you through complicated medication regimens while empowering you with the information you need to make informed health decisions.</p>
                <img src="Staff_img/img_1.jpg" alt="" width="350" height="250">
                <img src="Staff_img/img_2.jpg" alt="" width="350" height="250">
                <img src="Staff_img/img_3.jpg" alt="" width="350" height="250">
                <img src="Staff_img/img_4.jpg" alt="" width="350" height="250">
                <img src="Staff_img/img_5.jpg" alt="" width="350" height="250">
                <img src="Staff_img/img_6.jpg" alt="" width="350" height="250">
                <img src="Staff_img/img_7.jpg" alt="" width="350" height="250">
            </div>

            <div class="buttons">
                <button onclick="back()">Back to categories</button>
            </div>
            `;
        // Fade in main gallery
        main_gallery.style.opacity = '1';
    }, 300);
}

// Function to display Drugs gallery (similar structure to showGallery1)
function showGallery3() {
    // Change heading
    head.innerHTML = `<h1>Drugs</h1>`;
    // Fade out main gallery
    main_gallery.style.opacity = '0';
    setTimeout(() => {
        // Remove gallery class and update content
        main_gallery.classList.remove("gallery");
        main_gallery.innerHTML =
            `
            <div class="sub-catergory">
                <p>Browse our comprehensive list of over-the-counter(OTC) medicines. We have been approved by the world's leading pharmaceutical companies and have been rigorously reviewed for quality and safety. we have been created to make your healthcare experience easier and better.</p>
                <img src="Drug_img/img1.jpg" alt="" width="350" height="250">
                <img src="Drug_img/img2.jpg" alt="" width="350" height="250">
                <img src="Drug_img/img3.jpg" alt="" width="350" height="250">
                <img src="Drug_img/img4.jpg" alt="" width="350" height="250">
                <img src="Drug_img/img5.jpg" alt="" width="350" height="250">
                <img src="Drug_img/img6.jpg" alt="" width="350" height="250">
                <img src="Drug_img/img7.jpg" alt="" width="350" height="250">
            </div>

            <div class="buttons">
                <button onclick="back()">Back to categories</button>
            </div>
            `;
        // Fade in main gallery
        main_gallery.style.opacity = '1';
    }, 300);
}

// Function to display Services gallery (similar structure to showGallery1)
function showGallery4() {
    // Change heading
    head.innerHTML = `<h1>Services</h1>`;
    // Fade out main gallery
    main_gallery.style.opacity = '0';
    setTimeout(() => {
        // Remove gallery class and update content
        main_gallery.classList.remove("gallery");
        main_gallery.innerHTML =
            `
            <div class="sub-catergory">
                <p>With easy online ordering we deliver the pharmacy experience right to your door, providing you with trusted healthcare solutions anytime you need them. In addition to dispensing medication, we provide a full suite of services, designed to simplify your healthcare journey and improve your well-being.</p>
                <img src="Service_img/img_1.jpg" alt="" width="350" height="250">
                <img src="Service_img/img_2.jpg" alt="" width="350" height="250">
                <img src="Service_img/img_3.jpg" alt="" width="350" height="250">
                <img src="Service_img/img_4.jpg" alt="" width="350" height="250">
                <img src="Service_img/img_5.jpg" alt="" width="350" height="250">
                <img src="Service_img/img_6.jpg" alt="" width="350" height="250">
                <img src="Service_img/img_7.jpg" alt="" width="350" height="250">
            </div>

            <div class="buttons">
                <button onclick="back()">Back to categories</button>
            </div>
            `;
        // Fade in main gallery
        main_gallery.style.opacity = '1';
    }, 300);
}

// Function to load the initial gallery view
function loadGallery() {
    // Set initial heading and instructions
    head.innerHTML = `<h1>Gallery</h1>
                    <h2>Select a category you wish to see images</h2>`;
    // Render gallery options
    main_gallery.innerHTML = `
    <div class="gallery">
        <div onclick="showGallery1()" class="gallery-catergory-1">
            <h3>Pharmacy</h3>
            <img src="pharmacy_img/img1.jpg" alt="" width="350" height="250">
            <h4>Click here to see images of pharmacies</h4>
        </div>

        <div onclick="showGallery2()" class="gallery-catergory-2">
            <h3>Staff</h3>
            <img src="Staff_img/img_1.jpg" alt="" width="350" height="250">
            <h4>Click here to see images of pharmacies</h4>
        </div>

        <div onclick="showGallery3()" class="gallery-catergory-3">
            <h3>Drugs</h3>
            <img src="Drug_img/img1.jpg" alt="" width="350" height="250">
            <h4>Click here to see images of pharmacies</h4>
        </div>

        <div onclick="showGallery4()" class="gallery-catergory-4">
            <h3>Services</h3>
            <img src="Service_img/img_1.jpg" alt="" width="350" height="250">
            <h4>Click here to see images of pharmacies</h4>
        </div>
    </div>
    `;
}

// Function to go back to the main gallery view
function back() {
    // Fade out main gallery
    main_gallery.style.opacity = '0';
    setTimeout(() => {
        // Reload gallery
        loadGallery();
        // Fade in main gallery
        main_gallery.style.opacity = '1';
    }, 300);
}

// Load the initial gallery view
loadGallery();
