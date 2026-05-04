function start() {
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".main").classList.remove("hidden");

  type("line1", "guess whose birthday is today… 🎂", 40, () => {
    type("line2", "it’s my love gogototo 💖", 40);
  });

  hearts();
}

/* typing */
function type(id, text, speed, cb) {
  let i = 0;
  let el = document.getElementById(id);

  function t() {
    if (i < text.length) {
      el.innerHTML += text[i];
      i++;
      setTimeout(t, speed);
    } else if (cb) cb();
  }
  t();
}

/* next part */
function next() {
  document.getElementById("story").classList.remove("hidden");
  loveRain();
}

/* hearts floating */
function hearts() {
  setInterval(() => {
    let h = document.createElement("div");
    h.innerHTML = Math.random() > 0.5 ? "💖" : "💗";
    h.className = "float";

    h.style.left = Math.random() * 100 + "vw";
    h.style.bottom = "-20px";
    h.style.fontSize = (16 + Math.random() * 20) + "px";
    h.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 150);
}

/* love words */
function loveRain() {
  const words = ["bbg 💕","my love 💖","amorty 💘","gogo 💞","baby 💗"];

  setInterval(() => {
    let w = document.createElement("div");
    w.innerHTML = words[Math.floor(Math.random() * words.length)];
    w.className = "float";

    w.style.left = Math.random() * 100 + "vw";
    w.style.bottom = "-20px";
    w.style.fontSize = (14 + Math.random() * 10) + "px";
    w.style.animationDuration = "5s";

    document.body.appendChild(w);
    setTimeout(() => w.remove(), 6000);
  }, 200);
}
