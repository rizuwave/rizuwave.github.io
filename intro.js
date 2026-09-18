document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const estrella = document.getElementById("introEstrella");
    const fragmentos = document.getElementById("introFragmentos");
    const texto = document.getElementById("introTexto");
    const tarjeta = document.getElementById("introTarjeta");
    const boton = document.getElementById("botonEntrar");


    // =====================================================
    // EXPLOSIÓN
    // =====================================================

    function crearExplosion() {

        const flash = document.createElement("div");
        flash.className = "flashIntro";
        intro.appendChild(flash);


        // Crear fragmentos
        for (let i = 0; i < 70; i++) {

            const fragmento =
                document.createElement("div");

            fragmento.className = "fragmento";


            const angulo =
                Math.random() * Math.PI * 2;

            const distancia =
                150 + Math.random() * 350;


            const dx =
                Math.cos(angulo) * distancia;

            const dy =
                Math.sin(angulo) * distancia;


            const tamaño =
                3 + Math.random() * 5;


            fragmento.style.width =
                `${tamaño}px`;

            fragmento.style.height =
                `${tamaño}px`;


            fragmento.style.setProperty(
                "--dx",
                `${dx}px`
            );

            fragmento.style.setProperty(
                "--dy",
                `${dy}px`
            );


            fragmento.style.animationDelay =
                `${Math.random() * 150}ms`;


            fragmentos.appendChild(fragmento);


            setTimeout(() => {
                fragmento.remove();
            }, 1800);
        }


        // Hacer explotar la estrella
        estrella.classList.remove("pulso");
        estrella.classList.add("explota");


        setTimeout(() => {
            flash.remove();
        }, 800);
    }


    // =====================================================
    // SECUENCIA
    // =====================================================

    /*
        0s       → pantalla negra
        1s       → aparece estrella
        2.3s     → pequeño pulso
        2.8s     → explosión
        3.45s    → aparece texto
        ~6.5s    → termina de revelarse el texto
        8s       → aparece tarjeta
    */


    // Pulso antes de explotar
    setTimeout(() => {

        estrella.classList.add("pulso");

    }, 2300);


    // Explosión
    setTimeout(() => {

        crearExplosion();

    }, 2800);

    // =====================================
// ESTRELLAS DE FONDO
// =====================================

        setTimeout(() => {
            const fondo =
                document.getElementById("introEstrellasFondo");

            fondo.classList.add("visible");

        }, 500);


        // =====================================
        // TEXTO
        // =====================================

        setTimeout(() => {

            texto.classList.add("mostrar");

        }, 3450);


        // =====================================
        // DESAPARECER TEXTO
        // =====================================

        setTimeout(() => {

            texto.classList.add("ocultar");

        }, 9000);


        // =====================================
        // TARJETA
        // =====================================

        setTimeout(() => {

            tarjeta.classList.add("visible");

        }, 9800);


    // =====================================================
    // BOTÓN
    // =====================================================

    boton.addEventListener("click", () => {

        intro.classList.add("salir");

        setTimeout(() => {

            intro.style.display = "none";

        }, 1300);

    });

});