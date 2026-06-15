const text = `Hey my love 🌸

I just wanted to remind you before your day begins...

You are beautiful.
You are strong.
You are deeply loved.

Take your time today.
Breathe.
You are doing enough already.`;

let i = 0;

function typeWriter() {
  const el = document.getElementById("typewriter");

  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

window.onload = function () {
  typeWriter();
};

function showMessage() {
  document.getElementById("msg").style.display = "block";
}

function playMusic() {
  const audio = document.getElementById("bgmusic");
  audio.volume = 0.4;
  audio.play();
}

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.innerHTML = "🌸";

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (3 + Math.random() * 5) + "s";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 8000);
}

setInterval(createPetal, 400);
