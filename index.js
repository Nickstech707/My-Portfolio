function addFireflies() {
    const fireflyContainer = document.createElement('div');
    fireflyContainer.className = 'firefly-container';
    document.body.appendChild(fireflyContainer);
  
    for (let i = 0; i < 50; i++) {
      const firefly = document.createElement('span');
      firefly.className = 'firefly';
      firefly.style.left = `${Math.random() * 100}vw`;
      firefly.style.top = `${Math.random() * 100}vh`;
      firefly.style.animationDelay = `${Math.random() * 5}s`;
      fireflyContainer.appendChild(firefly);
    }
  }
