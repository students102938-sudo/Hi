function login(){

  const username =
    document.getElementById("username").value;

  const password =
    document.getElementById("password").value;

  const pin =
    document.getElementById("pin").value;

  if(
    username === "admin" &&
    password === "admin123" &&
    pin === "7860"
  ){

    document.getElementById("loginPage")
      .classList.add("hidden");

    document.getElementById("app")
      .classList.remove("hidden");

  }else{

    document.getElementById("loginError")
      .innerText = "Invalid Credentials";
  }
}
