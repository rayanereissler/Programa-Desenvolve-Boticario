function tocasom (idelementoaudio) {
    document.querySelector(idelementoaudio).play();
}

const listadeteclas = document.querySelector('.tecla');

listadeteclas[0].onclick = tocasompom;

let contador = 0;

/*enquanto = while */
while (contador < listadeteclas.length) {

    listadeteclas[contador].onclick = function() {
        tocasompom('#som_tecla_pom');
    };

    contador = contador + 1;

    console.log(contador);

}