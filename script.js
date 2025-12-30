neoedu-website
/script.js
Azetedris
Azetedris
Create script.js
496b533
 · 
29 minutes ago

Code

Blame
10 lines (9 loc) · 283 Bytes
function saveUser() {
  localStorage.setItem("neoedu", "visited");
  document.getElementById("msg").innerText =
    "👋 Xoş gəldin! Səni yadda saxladıq.";
}

if (localStorage.getItem("neoedu")) {
  document.getElementById("msg").innerText =
    "✨ Yenidən xoş gəldin!";
}
