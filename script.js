// Intro ketik
const introText = document.getElementById("introText");
const countdown = document.getElementById("countdown");
const messages = ["Hai Laura!", "Aku ada hadiah untukmu.", "Kita buka dalam..."];
let index = 0;

function typeMessage() {
  if (index < messages.length) {
    introText.innerHTML = "";
    let i = 0;
    const typing = setInterval(() => {
      introText.innerHTML += messages[index].charAt(i);
      i++;
      if (i >= messages[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          index++;
          typeMessage();
        }, 1000);
      }
    }, 100);
  } else {
    startCountdown();
  }
}

function startCountdown() {
  let count = 3;
  countdown.textContent = count;
  const interval = setInterval(() => {
    count--;
    countdown.textContent = count;
    if (count === 0) {
      clearInterval(interval);
      document.querySelector(".intro").style.display = "none";
      document.querySelector(".main").style.display = "block";
    }
  }, 1000);
}

typeMessage();

// Baca surat
const btnBaca = document.getElementById("bacaSurat");
const btnTutup = document.getElementById("tutupSurat");
const surat = document.getElementById("surat");

btnBaca.addEventListener("click", () => {
  surat.classList.remove("hidden");
});

btnTutup.addEventListener("click", () => {
  surat.classList.add("hidden");
});

// Hadiah
const bukaHadiah = document.getElementById("bukaHadiah");
const hadiahContent = document.querySelector(".hadiah-content");

bukaHadiah.addEventListener("click", () => {
hadiahContent.classList.remove("hidden");
setTimeout(() => {
  hadiahContent.classList.add("show");
  hadiahContent.style.display = "block"; // Tambahan ini penting
}, 10);

  if (typeof startFireworks === "function") {
    startFireworks();
  }
});
