let curtidas = 0;

function incrementa() {
    curtidas ++;
    document.getElementById('parag').textContent = "Total de curtidas: " + curtidas;
    console,log(curtidas);
}

function decrementa() {
    curtidas --;
    document.getElementById('parag').textContent = "Total de curtidas: " + curtidas;
    console,log(curtidas);
}