function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;

  if (name === "" || email === "" || comment === "") {
    alert("Please fill out all fields");
    return false;
  } else if (name.length < 3) {
    alert("Please enter a valid name");
    return false;
  } else if (comment.length < 10) {
    alert("Comment must be at least 10 characters");
    return false;
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email");
    return false;
  } else {
    return true;
  }
}

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
