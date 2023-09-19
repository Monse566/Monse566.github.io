let app = document.getElementById("typewriter");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #da74e2;'>|</span>",
});

typewriter
  .pauseFor(2500)
  .typeString(
    "<span style='color: #da74e2;'>Desarrollo sitios web y escribo artículos sobre programación.</span>"
  )
  .pauseFor(200)
  .deleteChars(10)
  .start();
