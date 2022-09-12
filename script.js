const form = document.getElementById("form");
const email = document.querySelector(".base-email");

const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const span = document.querySelector(".base-check");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value == "") {
    email.classList.add('error');
    span.innerHTML = "Please enter an email";
    email.style.border = "2px solid hsl(0, 93%, 68%)";
  } else if (!pattern.test(email.value)) {
    email.classList.add("error");
    span.innerHTML = "Please provide valid email";
    email.style.border = "2px solid hsl(0, 93%, 68%)";
  } else {
    valid();
  }
});

function error() {
  span.innerHTML = "Please enter an email";
  email.style.border = "2px solid hsl(0, 93%, 68%)";
  email.classList.add("error");
}

function valid() {
  span.innerHTML = "";
  email.style.border = "1px solid  hsl(0, 36%, 70%)";
  email.classList.remove("error");
}
