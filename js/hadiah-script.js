function checkPassword() {
  const correctPassword = "ultahlaura";
  const input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    // Tampilkan elemen yang disembunyikan
    document.getElementById("qrisWrapper").classList.add("show");
    document.getElementById("hadiahBtns").classList.remove("hidden");
    document.getElementById("passwordForm").style.display = "none";
  } else {
    alert("Password salah, coba lagi ya.");
  }
}
