onload = () => {
  document.body.classList.remove("container");
};

const audio = document.querySelector("audio");
audio.addEventListener("play", function () {
  // Establecer un inicio suave en 2 segundos
  audio.currentTime = 0;
  audio.volume = 0;
  const fadeDuration = 2; // Duración del fundido en segundos

  // Gradualmente aumentar el volumen al nivel deseado
  const fadeInterval = setInterval(() => {
    audio.volume += 3.2 / (fadeDuration * 10);
    if (audio.volume >= 1) {
      clearInterval(fadeInterval);
    }
  }, 100);

  // Establecer el punto final del fundido suave
  audio.addEventListener("timeupdate", function () {
    if (audio.currentTime >= audio.duration - fadeDuration) {
      audio.volume -= 3.2 / (fadeDuration * 10);
      if (audio.volume <= 0) {
        audio.volume = 1; // Asegurarse de que el volumen no sea negativo
        audio.removeEventListener("timeupdate", arguments.callee);
      }
    }
  });
});
