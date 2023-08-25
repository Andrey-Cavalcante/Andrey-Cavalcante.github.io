document.addEventListener("DOMContentLoaded", function() {
    const calcularTotal = document.getElementsByClassName('calcularTotal');
    const quantidade1 = document.getElementById('quantidade1');
    const resultadoP = document.getElementById("resultado");
    const I30 = 101706;


calcularTotal.addEventListener('click', function() {
        const inputValor = parseFloat(quantidade1.value);

        if (inputValor>0) {
            const resultado = I30 - inputValor;
            resultadoP.textContent = `O valor menos a entrada vai ser: ${resultado}`
        } else {
            resultadoP.textContent = "Por favor, insira números válidos.";
        }
    });
});
