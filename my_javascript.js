document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const response = document.getElementById('response');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const companyName = document.getElementById('companyName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const dotNumber = document.getElementById('dotNumber').value.trim();
    const make = document.getElementById('make').value.trim();
    const model = document.getElementById('model').value.trim();
    const serialNumber = document.getElementById('serialNumber').value.trim();
    const truckNumber = document.getElementById('truckNumber').value.trim();
    const trailerNumber = document.getElementById('trailerNumber').value.trim();
    const message = document.getElementById('message').value.trim();

    
    console.log("Form Submitted:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Company Name:", companyName);
    console.log("Phone Number:", phoneNumber);
    console.log("Email Address:", emailAddress);
    console.log("DOT Number:", dotNumber);
    console.log("Make:", make);
    console.log("Model:", model);
    console.log("Serial Number:", serialNumber);
    console.log("Truck Number:", truckNumber);
    console.log("Trailer Number:", trailerNumber);
    console.log("Message:", message);

    
    response.textContent = "Form submitted successfully!";
    
    
    alert("Thank you! Someone will contact you shortly.");

    
    form.reset();
  });
});