from pathlib import Path

content = """function login(){

  const username =
    document.getElementById("username")
    .value.trim();

  const password =
    document.getElementById("password")
    .value.trim();

  const pin =
    document.getElementById("pin")
    .value.trim();

  if(
    username === "admin" &&
    password === "admin123" &&
    pin === "7860"
  ){

    document.getElementById("loginPage")
      .style.display = "none";

    document.getElementById("app")
      .classList.remove("hidden");

    renderStock();

    showPage("dashboard");

  }else{

    document.getElementById("loginError")
      .innerText =
      "Invalid Credentials";
  }
}
"""

path = Path("/mnt/data/auth.js")
path.write_text(content, encoding="utf-8")

print(f"Saved fixed auth.js at: {path}")
