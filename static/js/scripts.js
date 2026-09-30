const slides = document.querySelectorAll('.tarjeta');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let currentIndex = 0; // Comienza en Slide 1
const total = slides.length;

// Clases para destacar la tarjeta activa (Sombra y Escala)
// (El 'scale-110' y 'z-10' se removieron de este arreglo porque ahora el JS los aplica directamente para no crear conflictos)
const shadowClasses = ['shadow-l', 'shadow-orange-500/50'];

// Clases para desenfocar las tarjetas laterales
const blurClasses = ['blur-xs'];

function updateCarousel() {
  // DISTANCIA ENTRE TARJETAS: Ajusta este número (+40) si quieres que estén más juntas o separadas
  // Lo calculamos dinámicamente según el ancho para que no se apilen en ninguna pantalla
  const cardWidth = slides[0].offsetWidth; 
  const cardGap = cardWidth + 40; 

  slides.forEach((slide, index) => {
    // 1. Calculamos la distancia relativa respecto al Slide activo
    let diff = index - currentIndex;

    // 2. Ajuste matemático para el efecto "Rueda Infinitas"
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // 3. NUEVO: Posicionamos con translate en lugar de order (soluciona el bug de números pares)
    const translateX = diff * cardGap;
    
    // (Asignamos la profundidad z-index para evitar que se apilen de forma incorrecta)
    slide.style.zIndex = total - Math.abs(diff);

    // 4. Aplicamos sombra y escala solo a la tarjeta del centro (diff === 0)
    if (diff === 0) {
      slide.classList.add(...shadowClasses);
      slide.classList.remove(...blurClasses); // Se quita el desenfoque al centro
      slide.style.opacity = '1';
      slide.style.transform = `translate(calc(-50% + ${translateX}px), -50%) scale(1.1)`; // Se aplica escala (scale-110)
    } else {
      slide.classList.remove(...shadowClasses);
      slide.classList.add(...blurClasses); // Se agrega desenfoque a los lados
      slide.style.opacity = '0.7'; // Opcional: atenuar tarjetas laterales
      slide.style.transform = `translate(calc(-50% + ${translateX}px), -50%) scale(0.9)`; // Se reducen las laterales
    }
  });
}

// Navegación cíclica
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % total;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + total) % total;
  updateCarousel();
});

// Recalcular distancias si la pantalla cambia de tamaño
window.addEventListener('resize', updateCarousel);

// Inicializar carrusel
updateCarousel();