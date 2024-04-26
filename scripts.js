/* 

Variáveis  
    Um espaco de memória que você 
    reserva e pode guardar o que 
    quiser lá dentro

    3 Jeitos de criar uma variável
    -var / jeito antigo - NÃO USE
    -let -> VOCÊ pode alterar o valor depois
    -const -> constante


Funções
    Um trecho de código que, só  é exexutado
    quando é chamado.

*/
// No Java Script, quando chamamos o html, temos que
// como document

const form = document.querySelector(".formulario-fale-conoco")
const mascara = document.querySelector(".mascara-formulario")


function MostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}