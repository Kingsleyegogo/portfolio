

function typewriter(element, text, delay = 200) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.innerHTML += text[i];
    }, delay * i);
  }
}

const el = document.getElementById("typewriter");
typewriter(el, "HELLO, I'M KINGSLEY");


// $("#about").mouseover(function(){
//   $(#about).attr("class", "slider");
// });
