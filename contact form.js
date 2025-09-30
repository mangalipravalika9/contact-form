document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form submission

  // Input fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  let isValid = true;

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation (using regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Message cannot be empty";
    isValid = false;
  }

  // If valid → show success message
  if (isValid) {
    successMessage.textContent = "✅ Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
