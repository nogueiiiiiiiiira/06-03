function adicionarItem(){

    // obter os valores de entrada
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;


    // validar se os campos estão válidos
    if(!nome || !valor || !quantidade){
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // criar uma linha na tabela com três células
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var celulaNome = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaQuantidade = novaLinha.insertCell(2);

    // atribuir os valores digitados às células
    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;

    var nome = document.getElementById("nome").value = "";
    var valor = document.getElementById("valor").value = "";
    var quantidade = document.getElementById("quantidade").value = "";
}

function exportarParaExcel(){

    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabela_produtos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de produtos"});
    XLSX.writeFile(wb, nomeArquivo);

}

function removerItem(){
    var nomeParaRemover = document.getElementById("nomeRemover").value;
    if(!nomeParaRemover){
        alert("Digite um nome!");
        return;
    }

    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var linhas = tabela.getElementsByTagName("tr");

    //percorrer sobre todas as linhas da tabela

    for(var i = 0; i < linhas.length; i++){
        // obtendo a primeira célula (td) da linha atual
        var celulaNome = linhas[i].getElementsByTagName("td")[0];

        //verificando se a célula nome existe e se o conteúdo é igual ao que quer ser excluído
        if(celulaNome && celulaNome.innerHTML === nomeParaRemover){
            tabela.deleteRow(i);
            nomeParaRemover = document.getElementById("nomeRemover").value = "";
            alert("Item deletado com sucesso!");
            return;
        }

        alert("Digite um nome existente!");
        nomeParaRemover = document.getElementById("nomeRemover").value = "";
    }
}