function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.setProperty('--x-offset', Math.random() * 2 - 1);
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 5 + 's';
    
    document.querySelector('.hearts-container').appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => heart.remove(), 8000);
  }
  
  // Create hearts at intervals
  setInterval(createHeart, 300);