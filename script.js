function saveUser() {
  localStorage.setItem("neoedu", "visited");
  document.getElementById("msg").innerText =
    "👋 Xoş gəldin! Səni yadda saxladıq.";
}

if (localStorage.getItem("neoedu")) {
  document.getElementById("msg").innerText =
    "✨ Yenidən xoş gəldin!";
}
