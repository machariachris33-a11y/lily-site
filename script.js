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
