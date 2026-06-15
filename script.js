const text = 
"Hey my love 🌸\n\n" +
"I just wanted to remind you of something before your day begins...\n\n" +
"You are beautiful.\n" +
"You are strong.\n" +
"You are deeply loved.\n\n" +
"No matter how heavy today feels, you are not alone.\n" +
"Take your time. Breathe. You are doing enough.";

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

window.onload = typeWriter;

function showMessage() {
  document.getElementById("msg").style.display = "block";
}
