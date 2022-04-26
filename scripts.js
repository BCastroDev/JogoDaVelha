var playerTime = 1;
var varAserVerificada = false;
let campos = ["","","","","","","","",""];
let acabou = false;
let jog1 = ""
let jog2 = ""
let quad = " quadrado"
let jogadoresSelecionados = false

function jogadorOk(){
    if(jog1 == "" || jog2 ==""){
        jogadoresSelecionados = false
    }
    else {
        jogadoresSelecionados = true
    }
}

function alterarJogador(){
    jog1 = "jg" + document.getElementById("jogadorSel1").value + quad;
    jog2 = "jg" + document.getElementById("jogadorSel2").value + quad;
    jogadorOk()
console.log(jog1 , jog2)
}

document.addEventListener('change', ()=>alterarJogador())


document.addEventListener('DOMContentLoaded', () => {
    let quadrados = document.querySelectorAll(".quadrado");
        quadrados.forEach((quadrados)=> {
    quadrados.addEventListener('click', clicou)


    })

} )


function clicou(event) { 

    jogadorOk()

    if(acabou) {
        return
    }

    if(!jogadoresSelecionados){
        alert("Selecione os jogadores")
        return
    }

    if (campos[event.target.id -1] == "" && playerTime == 1) { 
        event.target.className =  jog1  ;
        campos[event.target.id -1] = playerTime
        alguemGanhou()
        ngVenceu()
        playerTime = 2 ;

    }
    else if (campos[event.target.id -1] == "" && playerTime == 2) { 
        event.target.className = jog2;
        campos[event.target.id -1] = playerTime
        alguemGanhou()
        ngVenceu()
        playerTime = 1;
    }

    else {
        alert("Tá cego?")
        console.log(campos)}
}

function alguemGanhou(){

let sequenciasVencedoras = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    
]

for (let i = 0 ; i < sequenciasVencedoras.length ; i++) {

    let seq = sequenciasVencedoras[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (campos[pos1] != "" &&
        campos[pos1] == campos[pos2] &&
        campos[pos1] == campos[pos3]) {
        
        acabou = true

        alert("O Jogador " + document.getElementById("jogadorSel" + playerTime).value + " Venceu!" )
        zerar();
}}}

function ngVenceu(){
    if (
    campos[0] != "" && 
    campos[1] != "" && 
    campos[2] != "" && 
    campos[3] != "" && 
    campos[4] != "" && 
    campos[5] != "" && 
    campos[6] != "" &&
    campos[7] != "" && 
    campos[8] != "" ) { 
    setTimeout(()=>{alert("Ninguém Venceu")},100);
    zerar() }
}

function zerar(){
    setTimeout (()=>{ 
        campos = ["","","","","","","","",""];
        acabou = false;
        let quadrados = document.querySelectorAll(".quadrado");

        quadrados.forEach((quadrados)=> { quadrados.className = "quadrado" } ) 

    },100) 
}