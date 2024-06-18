// Simple example to simulate button click interaction (no actual functionality)
const checkPointsButton = document.getElementById('check-points');

checkPointsButton.addEventListener('click', () => {
  alert('Checking loyalty points...');

function redirectToSecondPage() {
      const countryCode = document.getElementById('country-code-select').value;
      const phoneNumber = document.getElementById('phone-number-input').value;
      // Validate phone number input if needed before redirecting

      // Redirect to the second page with query parameters
      window.location.href = `mulahsecondpage.html?country=${countryCode}&phone=${phoneNumber}`;

function redirectToThirdPage() {
      const countryCode = document.getElementById('country-code-select').value;
      const phoneNumber = document.getElementById('phone-number-input').value;
      
      // Set hidden input values
      document.getElementById('country-code').value = countryCode;
      document.getElementById('phone-number').value = phoneNumber;
      
      // Submit the form
      document.getElementById('form-first-page').submit();
    }

});
