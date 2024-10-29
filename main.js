onload = () =>{
        document.body.classList.remove("container");
};

function createFallingStars() {
        const starsContainer = document.querySelector('.falling-stars');
        
        for (let i = 0; i < 20; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.style.left = Math.random() * 100 + 'vw';
          star.style.animationDelay = Math.random() * 5 + 's';
          starsContainer.appendChild(star);
        }
      }
      
      createFallingStars();

