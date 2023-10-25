function submitted(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const description = document.getElementById('description').value;

    console.log(name, phone, email, address, description);
  }

 
  const form = document.querySelector('form');
  form.addEventListener('submit', submitted);