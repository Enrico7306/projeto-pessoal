

  function scrollToBottom() {
    const start = window.pageYOffset; // Posição inicial
    const end = document.body.scrollHeight; // Posição final
    const distance = end - start; // Distância total a ser rolada
    const duration = 1000; // Duração da animação em milissegundos
    let startTime = null;

    function animateScroll(time) {
      if (!startTime) startTime = time; // Marca o tempo inicial
      const progress = time - startTime; // Tempo passado

      // Calcula a nova posição de rolagem
      const newPosition = start + (distance * (progress / duration));

      // Aplica a nova posição de rolagem
      window.scrollTo(0, newPosition);

      // Continua a animação enquanto o tempo não chega ao final
      if (progress < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, end); // Garante que chegue exatamente no final
      }
    }

    requestAnimationFrame(animateScroll);
  }






