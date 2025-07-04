function mostrarMensajeW() {
    // Mostrar el mensaje
    document.getElementById("mensaje1").style.display = "block";
  }

  function ocultarMensajeW() {
    // Ocultar el mensaje
    document.getElementById("mensaje1").style.display = "none";
  }

  function mostrarMensajeT() {
    // Mostrar el mensaje
    document.getElementById("mensaje2").style.display = "block";
  }

  function ocultarMensajeT() {
    // Ocultar el mensaje
    document.getElementById("mensaje2").style.display = "none";
  }

  // ANIMACION DE SCROLL
  ScrollReveal().reveal('.container');
  ScrollReveal().reveal('.nav-main',{delay:500});
  ScrollReveal().reveal('.nav-brand',{delay:500});
  ScrollReveal().reveal('.nav-menu',{delay:500});
  ScrollReveal().reveal('.menu-btn',{delay:500});
  ScrollReveal().reveal('.showcase',{delay:500});
  ScrollReveal().reveal('.news-cards',{delay:500});
  ScrollReveal().reveal('.news-cards-2',{delay:500});
  ScrollReveal().reveal('.news-cards-3',{delay:500});
  ScrollReveal().reveal('.news-cards-chicas',{delay:500});
  ScrollReveal().reveal('.news-cards-2-chicas',{delay:500});
  ScrollReveal().reveal('.news-cards-3-chicas',{delay:500});
  ScrollReveal().reveal('.sub-title',{delay:500});
  ScrollReveal().reveal('.service',{delay:500});
  ScrollReveal().reveal('.info',{delay:500});
  ScrollReveal().reveal('.img',{delay:500});
  ScrollReveal().reveal('.mapa',{delay:500});
  ScrollReveal().reveal('.footer-links',{delay:500});
  ScrollReveal().reveal('.footer-container',{delay:500});
  ScrollReveal().reveal('.logo-fo',{delay:500});
  ScrollReveal().reveal('.bancos',{delay:500});
  ScrollReveal().reveal('.btns',{delay:500});
  ScrollReveal().reveal('.btn-tr',{delay:500});
  ScrollReveal().reveal('.footer',{delay:500});
  ScrollReveal().reveal('.itext',{delay:500});
  ScrollReveal().reveal('.itext1',{delay:500});
  ScrollReveal().reveal('.slider-container',{delay:500});
  ScrollReveal().reveal('.final',{delay:500});
  


 //BARRA DE MENU PARA DISPOSITIVOS MOVILES. 
 
 document.querySelector('.menu-btn').addEventListener('click', ()=> {
  document.querySelector('.nav-menu').classList.toggle('show');
 })

 //IFRAME MODIFICADO. 

 window.addEventListener('resize', function () {
  // Obtener el ancho de la pantalla
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Obtener el iframe
  var iframe = document.querySelector('iframe');

  // Asignar nuevas medidas al iframe cuando el ancho de la pantalla es 700px o menos
  if (screenWidth <= 700) {
      iframe.style.width = '100%'; // Puedes ajustar el ancho que desees
      iframe.style.height = '100px'; // Puedes ajustar la altura que desees
  } else {
      // Restaurar las medidas por defecto cuando el ancho de la pantalla es mayor a 700px
      iframe.style.width = '1200%';
      iframe.style.height = '400px';
  }
});


//SLIDER DE PERSONAL
 
  const slider = document.getElementById('image-slider');
  const slides = document.querySelectorAll('.slide');
  const container = document.getElementById('carousel-container');
  const slideWidth = slides[0].offsetWidth + 20;
  let currentIndex = 0;
  let autoSlideInterval;

  // Clonar los primeros slides al final para el efecto infinito
  const totalSlides = slides.length;
  for (let i = 0; i < totalSlides; i++) {
    const clone = slides[i].cloneNode(true);
    slider.appendChild(clone);
  }

  function updateSlidePosition() {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex++;
    updateSlidePosition();
    if (currentIndex === totalSlides) {
      setTimeout(() => {
        slider.style.transition = 'none';
        currentIndex = 0;
        slider.style.transform = `translateX(0)`;
      }, 500);
    }
  }

  function prevSlide() {
    if (currentIndex === 0) {
      slider.style.transition = 'none';
      currentIndex = totalSlides;
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      setTimeout(() => {
        currentIndex--;
        updateSlidePosition();
      }, 20);
    } else {
      currentIndex--;
      updateSlidePosition();
    }
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 1000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Iniciar auto-slide
  startAutoSlide();

  // Pausar al hacer hover
  container.addEventListener('mouseenter', stopAutoSlide);
  container.addEventListener('mouseleave', startAutoSlide);

  // Soporte táctil
  let startX = 0;
  let endX = 0;

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    stopAutoSlide();
  });

  container.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  });

  container.addEventListener('touchend', () => {
    const delta = endX - startX;
    if (Math.abs(delta) > 50) {
      if (delta < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    startAutoSlide();
  });

  // Ajuste en redimensionamiento
  window.addEventListener('resize', () => {
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });





