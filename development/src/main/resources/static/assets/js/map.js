
function dadosPessoais() {
    $('#name').text(localStorage.getItem('nome'))
    $('#dataNascimento').text(localStorage.getItem('dataNascimento'))
    $('#apelido').text(localStorage.getItem('apelido'))
    $('#provincia').text(localStorage.getItem('provincia'))
    $('#habilitacaoLiteraria').text(localStorage.getItem('habilitacaoLiteraria'))
    $('#natural').text(localStorage.getItem('natural'))
    $('#profisao').text(localStorage.getItem('profisao'))
    $('#endereco').text(localStorage.getItem('endereco'))
    $('#ocupacao').text(localStorage.getItem('ocupacao'))
    $('#numeroCasa').text(localStorage.getItem('numeroCasa'))
    $('#grupoSanguineo').text(localStorage.getItem('grupoSanguineo'))
    $('#telefone').text(localStorage.getItem('telefone'))
    $('#numeroBi').text(localStorage.getItem('numeroBi'))
    $('#dataEmissao').text(localStorage.getItem('dataEmissao'))
}
function filiacaoEstadoCivil() {
    $('#pai').text(localStorage.getItem('pai'))
    $('#mae').text(localStorage.getItem('mae'))
    $('#estadoCivil').text(localStorage.getItem('estadoCivil'))
    $('#dataCasamento').text(localStorage.getItem('dataCasamento'))
    $('#genero').text(localStorage.getItem('genero'))
}
function dadosCongregacionais() {
    $('#igreja').empty();
    $('#igreja').text(localStorage.getItem('igreja'))
    $('#funcaoIgreja').text(localStorage.getItem('funcaoIgreja'))
    $('#dataIngresso').text(localStorage.getItem('dataIngresso'))
    $('#desde').text(localStorage.getItem('desde'))
    $('#despacho').text(localStorage.getItem('despacho'))
    $('#direcaoAlocacao').text(localStorage.getItem('direcaoAlocacao'))
    $('#categoria').text(localStorage.getItem('categoria'))
    $('#dataBaptismo').text(localStorage.getItem('dataBaptismo'))
    $('#padrinho').text(localStorage.getItem('padrinho'))
    $('#madrinha').text(localStorage.getItem('madrinha'))
}
function printHtmlCss() {
    // alert(myMap.values());
    printJS({
        printable: 'report',
        type: 'html',
        css: '/assets/bootstrap/css/bootstrap.min.css',
        scanStyles: true,
    })
    $("#report").hide();
   
}
dadosPessoais()
filiacaoEstadoCivil()
dadosCongregacionais()
printHtmlCss()
