function requests() {
    const name = document.getElementById('Name').value.trim();
    const email = document.getElementById('Email').value.trim();

    const nameValid = /\w+/.test(name);
    const emailValid = /^\S+@\S+\.\S+$/.test(email);

    if (nameValid && emailValid) {
      console.log(' Name and Email are valid!');
      // send this data to a server here (e.g. using fetch or XMLHttpRequest)
    } else {
      console.log('Invalid input:');
      if (!nameValid) console.log('Name is invalid or empty');
      if (!emailValid) console.log('Email format is incorrect');
    }
}