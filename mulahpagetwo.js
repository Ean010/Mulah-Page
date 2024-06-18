document.addEventListener('DOMContentLoaded', function() {
  const noEmailCheckbox = document.getElementById('no-email');
  const emailInput = document.getElementById('email');
  const emailFormGroup = document.getElementById('email-group');

  // Initially hide/show email input based on checkbox
  noEmailCheckbox.addEventListener('change', function() {
    if (noEmailCheckbox.checked) {
      emailInput.value = ''; // Clear email input
      emailFormGroup.style.display = 'none';
    } else {
      emailFormGroup.style.display = 'block';
    }
  });

  // Check initial state on page load
  if (noEmailCheckbox.checked) {
    emailFormGroup.style.display = 'none';
  }
});

