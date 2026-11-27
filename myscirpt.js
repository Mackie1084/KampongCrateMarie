const contactForm = document.getElementById('contact-form');

if (contactForm) {
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const formStatus = document.getElementById('form-status');

  function setFieldError(input, errorElement, message) {
    errorElement.textContent = message;
    errorElement.classList.toggle('is-visible', Boolean(message));

    if (message) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailIsValid = email.includes('@');
    const messageIsValid = message.length > 0;

    setFieldError(emailInput, emailError, emailIsValid ? '' : "Please enter an email address that includes an '@' symbol.");
    setFieldError(messageInput, messageError, messageIsValid ? '' : 'Please enter a message.');

    formStatus.classList.remove('is-visible', 'status-error');
    formStatus.textContent = '';

    if (!emailIsValid || !messageIsValid) {
      if (!emailIsValid) {
        emailInput.focus();
      } else {
        messageInput.focus();
      }
      return;
    }

    formStatus.textContent = 'Thanks! Your message is ready to send.';
    formStatus.classList.add('is-visible');
    contactForm.reset();
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim().includes('@')) {
      setFieldError(emailInput, emailError, '');
    }
  });

  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim()) {
      setFieldError(messageInput, messageError, '');
    }
  });
}
