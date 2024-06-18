document.addEventListener('DOMContentLoaded', function() {
  // Retrieve query parameters from URL
  const params = new URLSearchParams(window.location.search);
  
  // Retrieve values from query parameters
  const name = params.get('name');
  const email = params.get('email');
  const day = params.get('day');
  const month = params.get('month');
  const year = params.get('year');
  const countryCode = params.get('country');
  const phoneNumber = params.get('phone');

  // Display retrieved data in the HTML document
  document.getElementById('display-name').textContent = name || '-';
  document.getElementById('display-email').textContent = email || 'No email address';
  document.getElementById('display-birthday').textContent = `${day}/${month}/${year}`;
  document.getElementById('display-phone').textContent = `+${countryCode} ${phoneNumber}`;
});
