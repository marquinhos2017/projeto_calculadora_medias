const form = document.getElementById('fomr-atividade');
let linhas = '';
const imgaprovado = '<img src="/images/aprovado.png" />';
const imgreprovado = '<img src="/images/reprovado.png" />';

const atividade = [ ];
const notas = [ ];

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanreprovado = '<span class="resultado reprovado">reprovado</span>';

const notaminima = parseFloat(prompt('digite a nota minima'));

form = addEventListener('submit',function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizamediafinal();

    


});

function adicionaLinha(){
    const inputNomeatividade = document.getElementById('nome-atividade');
    const inputNnotaatividade = document.getElementById('nota-atividade');

    if(atividade.includes(inputNomeatividade.value)){
        alert(`A Atividade ${inputNomeatividade.value} ja foi inserida`);
    }else{
        atividade.push(inputNomeatividade.value);
    notas.push(parseInt(inputNnotaatividade.value));
    

    let linha = '<tr>';
    linha += `<td>${inputNomeatividade.value}</td>`;
    linha += `<td>${inputNnotaatividade.value}</td>`;
    linha += `<td>${inputNnotaatividade.value >= notaminima ?imgaprovado:imgreprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }
    

   

    inputNnotaatividade.value = '';
    inputNomeatividade.value = '';
}

function atualizaTabela(){
    const corpotablea = document.querySelector('tbody');
    corpotablea.innerHTML = linhas;
}

function atualizamediafinal(){
    const mediafinal = calculamediafinal();
    document.getElementById('media-final-valor').innerHTML = mediafinal;
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= 7 ? spanAprovado: spanreprovado;

}

function calculamediafinal(){
    let somadasnotas = 0;
    for(let i =0 ; i<notas.length;i++ ){
        somadasnotas += notas[i];
    }

    return  somadasnotas/notas.length;

}