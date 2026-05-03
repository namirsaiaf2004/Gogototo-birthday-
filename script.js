function openHeart() {
  document.querySelector(".heart-container").style.display = "none";
  document.querySelector(".content").classList.remove("hidden");

  typeText("text1", "Guess whose birthday is today... 🎂", 40, () => {
    typeText("text2", "It's my love Gogototo 💖", 40);
  });

  startHearts();
}

/* TYPE EFFECT */
function typeText(id, text, speed, callback) {
  let i = 0;
  let el = document.getElementById(id);

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }

  typing();
}

/* FLOATING HEARTS (STRONG VERSION) */
function startHearts() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = Math.random() > 0.5 ? "💖" : "💗";
    heart.classList.add("floating");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";

    heart.style.fontSize = (16 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 150);
}

/* SURPRISE MESSAGE */
function showSurprise() {
  let el = document.getElementById("surprise");
  el.classList.add("show");

  burstHearts();
}

/* HEART BURST EFFECT */
function burstHearts() {
  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    let angle = Math.random() * 2 * Math.PI;
    let distance = 100 + Math.random() * 200;

    let xMove = Math.cos(angle) * distance;
    let yMove = Math.sin(angle) * distance;

    document.body.appendChild(heart);

    heart.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${xMove}px, ${yMove}px)`, opacity: 0 }
    ], {
      duration: 1000,
      easing: "ease-out"
    });

    setTimeout(() => heart.remove(), 1000);
  }
}
