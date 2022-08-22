var i = 0;
var txt = 'Project Pixels Studio';
var speed = 100;

function typeWriterReveal() {
  if (i < txt.length) {
    document.getElementById("type-writer-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriterReveal, speed);
  }
}