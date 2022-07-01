import prodb, {
  bulkcreate
} from "./Module.js";

let db = prodb("Productdb", {
  user: `++id, name, username, password, email`
});

const btnsubmit  = document.getElementById('btnsubmit');

btnsubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const email = document.getElementById("email");

  bulkcreate(db.user, {
    name: name.value,
    username: username.value,
    password: password.value,
    email: email.value
  });

  name.value = username.value = password.value = email.value = "";

});