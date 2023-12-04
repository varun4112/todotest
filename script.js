function signup() {
  let userName = document.getElementById("Username").value;
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;
  user = {
    uName: userName,
    uEmail: email,
    uPswd: password,
  };
  if (user.uName == "" || user.uEmail == "" || user.uPswd == "") {
    alert("Please Enter All Feilds");
  } else {
    if (user.uEmail in localStorage) {
      alert("Account already Exists");
    } else {
      localStorage.setItem(user.uEmail, JSON.stringify(user));
      window.location = `./login.html`;
    }
  }
}

function login() {
  emailLogin = document.getElementById("Email").value;
  pswdLogin = document.getElementById("Password").value;

  userLogin = JSON.parse(localStorage.getItem(emailLogin));
  console.log(userLogin);
  if (emailLogin == "") {
    alert("Please enter Text");
  } else {
    if (userLogin.uPswd == pswdLogin) {
      alert("login sucessfull");
      window.location = "./landing.html";
    } else {
      alert("invalid password");
    }
  }
}

function push() {
  var newtodo = document.getElementById("task").value;
  console.log(newtodo);
  if (newtodo == "") {
    alert("Please Enter Text");
  } else {
    const para = document.createElement("li");
    para.innerText = newtodo;
    document.getElementById("taskul").appendChild(para);
  }
}

function deleteall() {
    document.getElementById("taskul").innerHTML=`<ul id="taskul">
    </ul>`
}
