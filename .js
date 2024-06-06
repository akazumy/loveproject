<script>
    document.addEventListener("DOMContentLoaded", function() {
        var codeElement = document.getElementById("code");
        var audio = document.getElementById("audioEl");

        function checkIfInView() {
            var rect = codeElement.getBoundingClientRect();
            var isInView = (rect.top >= 0 && rect.bottom <= window.innerHeight);
            return isInView;
        }

        function playAudio() {
            audio.play();
        }

        function checkAndPlayAudio() {
            if (checkIfInView()) {
                playAudio();
                // Si el audio se reproduce automáticamente, ya no necesitamos escuchar el evento de desplazamiento
                window.removeEventListener('scroll', checkAndPlayAudio);
            }
        }

        // Agregamos un evento de desplazamiento para verificar si el texto está en la pantalla mientras se desplaza
        window.addEventListener('scroll', checkAndPlayAudio);

        // También verificamos si el texto está en la pantalla cuando se carga la página
        checkAndPlayAudio();
    });
</script>