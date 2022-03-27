//variaveis
var jogador , vencedor = null;
var jogadorselecionado = document.getElementById('jogadorSelecionado');
var vencedorselecionado = document.getElementById('vencedorSelecionado');

// começando com X
mudarJogador ('X');

function escolherQuadrado(id){

if(vencedor !== null){
    return;
}

var quadrado = document.getElementById(id);

if(quadrado.innerHTML !== '-'){
    return;
}
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#fff';
    quadrado.style.fontFamily = 'Fredoka';
    quadrado.style.fontSize = '28px';

    if(jogador === 'X'){
        jogador = 'O';
    } else
    {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
jogador = valor;
jogadorselecionado.innerHTML = jogador;

}

function checaVencedor(){

    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checaSequencia (quadrado1, quadrado2, quadrado3)){
        mudarCorquadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia (quadrado4, quadrado5, quadrado6)){
        mudarCorquadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    
    if(checaSequencia (quadrado7, quadrado8, quadrado9)){
        mudarCorquadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    
    if(checaSequencia (quadrado1, quadrado4, quadrado7)){
        mudarCorquadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia (quadrado2, quadrado5, quadrado8)){
        mudarCorquadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if(checaSequencia (quadrado3, quadrado6, quadrado9)){
        mudarCorquadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if(checaSequencia (quadrado1, quadrado5, quadrado9)){
        mudarCorquadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia (quadrado3, quadrado5, quadrado7)){
        mudarCorquadrado (quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }

}

function mudarVencedor(quadrado){
    vencedor =  quadrado.innerHTML
    vencedorselecionado.innerHTML = vencedor;
    }

function mudarCorquadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0a9396';
    quadrado2.style.background = '#0a9396';
    quadrado3.style.background = '#0a9396';
}
function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar()
{
    vencedor = null;
    vencedorselecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#001219';
        quadrado.style.color = '#001219';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}