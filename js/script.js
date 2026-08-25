/*function textoAtv(elemento){
    const mtzTexto = elemento.innerHTML.match("/<[^>]+>|./g");
    console.log (mtzTexto)
    elemento.innerHTML = ' ';
    mtzTexto.forEach((Letra, i)=>{
        setTimeout(() => {
            elemento.innerHTML += Letra;
        }, 75 * i);
    }); 
}

const titulo = document.querySelector('.digitando')

textoAtv(titulo)*/

function textoAtv(elemento) {

    const mtzTexto = elemento.innerHTML.match(/<[^>]+>|./g);

    console.log(mtzTexto);

    elemento.innerHTML = '';

    mtzTexto.forEach((letra, i) => {

        setTimeout(() => {

            elemento.innerHTML += letra;

        }, 75 * i);

    });
}

const titulo = document.querySelector('.digitando');

textoAtv(titulo);