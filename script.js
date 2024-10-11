'use strict';
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})
const grande = document.querySelector('.grande');
const puntos = document.querySelectorAll('.punto');

// Cuando se hace CLICK en un punto
puntos.forEach((cadaPunto, i) => {
    puntos[i].addEventListener('click', () => {
        // Guardar la posición de ese PUNTO
        let posicion = i;
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -40;

        // MOVEMOS el grande
        grande.style.transform = `translateX(${operacion}%)`;

        // Recorremos TODOS los puntos para quitar la clase activo
        puntos.forEach((cadaPunto, i) => {
            puntos[i].classList.remove('activo');
        });

        // Añadir la clase activo en el punto que hemos hecho CLICK
        puntos[i].classList.add('activo');
    });
});

// Desplazamiento de los items del slide
document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

document.getElementById('menu-icon').addEventListener('click', function () {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('open');
});

//Certificados js
document.addEventListener('DOMContentLoaded', function () {
   var swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth: 2000,
        modifer: 1,
        slidesShadows: true,
        rotate: 0,
        strecth: 0,

    }

   })
});
// Función para abrir el modal con la imagen seleccionada
function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imageSrc; // Cambia la fuente de la imagen al hacer clic
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Añadir funcionalidad de zoom al hacer clic en la imagen
document.getElementById('modalImage').addEventListener('click', function () {
    var closeButton = document.querySelector('.close');
    
    if (this.classList.contains('zoomed')) {
        this.classList.remove('zoomed'); // Hacer zoom out
        closeButton.classList.remove('zoomed'); // Eliminar el cambio de color en el botón de cerrar
    } else {
        this.classList.add('zoomed'); // Hacer zoom in
        closeButton.classList.add('zoomed'); // Cambiar el color de la X
    }
});


// Asignar eventos a los botones de "Ver Certificado"
document.querySelectorAll('.btn-1').forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        var imgSrc = this.previousElementSibling.querySelector('img').src;
        openModal(imgSrc);
    });
});
