let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<sapan style= "color: #563231;" > Desarrolló sitios web y programadora de frontend.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
