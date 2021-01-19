// ---data entries

function Render(app) {

    this.listarProvincias = function (){
        let select = $('#provincia');
        select.empty();
        select.append($('<option/>').html("Selecione"));
        
        for(let i = 0; i < app.provincias.list.length; i ++){

            let provincia = app.provincias.list[i];
            select.append($('<option/>').html(provincia));
            
        }
    },
    this.listarSangues = function (){
        let select = $('#grupoSanguineo');
        select.empty();
        select.append($('<option/>').html("Selecione"));
        
        for(let i = 0; i < app.sangue.list.length; i ++){

            let sangue = app.sangue.list[i];
            select.append($('<option/>').html(sangue));
            
        }
    },
    this.carregarSelectIgrejas = function (){
        
        let select = $('#igreja');
        select.empty();
        select.append($('<option/>').html("Selecione"));
        $.get('buscar_igrejas', null, function(igrejas,status){
  
            for(let i = 0; i < igrejas.length; i ++){

                 let igreja = igrejas[i].denominacao;
                 select.append($('<option/>').html(igreja));
            
            }
        }); 
    },
  
    this.editCarregarSelectIgrejas = function (igrejaAtual){
       
        
        $('#editIgreja').empty();
        $('#editIgreja').append($('<option/>').html(igrejaAtual));
        $.get('buscar_igrejas', null, function(igrejas,status){
  
            for(let i = 0; i < igrejas.length; i ++){

                 let igreja = igrejas[i].denominacao;
                 if(igrejaAtual != igreja){
                 	$('#editIgreja').append($('<option/>').html(igreja));
                 }
            }
        }); 
    },
   
    // coded by Samuel Salomão
    // code Operador
    this.CreateNewOperador = function () {
        let Operador = {};
        Operador.nome = $("#nome").val();
        Operador.email = $("#email").val();
        Operador.pin = $("#pin").val();
        return Operador;
    }
    this.CleanOperador = function () {
        let Operador = {};
        $("#nome").val("");
        $("#email").val("");
    }
    this.CreateEditOperador = function () {
        let Operador = {};
        Operador.nome = $("#editNome").val();
        Operador.email = $("#editEmail").val();
        Operador.anteriorNome = $("#anteriorNome").val();
        Operador.anteriorEmail = $("#anteriorEmail").val();
        return Operador;
    }
    this.CleanModalOperador = function () {
        let Operador = {};
        $("#editNome").val("");
        $("#editEmail").val("");
    }
    this.addOperador = function () {
        let operador = render.CreateNewOperador();
        if (operador.nome != "" && operador.email != "") {
            // event that do the jquery-post ajax to save new Operator in to server
            console.log("update operador: "+JSON.stringify(operador));
            render.SaveNewOperadorInToServer(operador);
            render.CleanOperador();
            // comment the lines in bellow when the SaveNewOperadorInToServer do and work
            let sizeOf = app.Operadores.list.length;
            operador.idRef = sizeOf + 1;
            app.Operadores.list.push(operador);
            render.sucessoModal("Adicionar Operador", "Operador: " + operador.nome + " adicionado com sucesso!");
            render.listarOperadores();
        }
    }
    this.editOperador = function (index) {
        let operador = render.CreateEditOperador();
        if (operador.nome != "" && operador.email != "") {
            render.SaveEditOperadorInToServer(operador);
            // comment the lines in bellow when the SaveEditOperadorInToServer do and work
            render.CleanModalOperador();
            app.Operadores.list[index] = operador;
            render.sucessoModal("Editar Operador", "Operador: " + operador.nome + " foi editado com sucesso!");
            render.listarOperadores();
        }
    }
    var positionOperador;
    // use this to render EditYourOperators
    this.EditOperador = function (position) {
        let operador = app.Operadores.list[position];
        // alert("Nome: "+operador.nome+" Email: "+operador.email);
        $("#editNome").val(operador.nome);
        $("#editEmail").val(operador.email);
        $("#anteriorNome").val(operador.nome);
        $("#anteriorEmail").val(operador.email);
        positionOperador = position;
    }
    //

    // code igreja 
    this.CreateNewIgreja = function () {
        let Igreja = {};
        Igreja.denominacao = $("#denominacao").val();
        Igreja.pais = $("#pais").val();
        Igreja.provincia = $("#provincia").val();
        return Igreja;
    }
    this.CleanIgreja = function () {
        $("#denominacao").val("");
        $("#pais").val("");
        $("#provincia").val("");
    }
    this.CreateEditIgreja = function () {
        let Igreja = {};
        
        Igreja.denominacao = $("#editDenominacao").val();
        Igreja.pais = $("#editPais").val();
        Igreja.provincia = $("#editProvincia").val();
        
        Igreja.anteriorDenominacao = $("#anteriorDenominacao").val();
        Igreja.anteriorPais = $("#anteriorPais").val();
        Igreja.anteriorProvincia = $("#anteriorProvincia").val();
        
        return Igreja;
    }
    this.CleanModalIgreja = function () {
        $("#editDenominacao").val("");
        $("#editPais").val("");
        $("#editProvincia").val("");
    }
    this.addIgreja = function () {
        let igreja = render.CreateNewIgreja();
        if (igreja.denominacao != "" && igreja.pais != "" && igreja.provincia != "") {
            // event that do the jquery-post ajax to save new Operator in to server
            render.SaveNewIgrejaInToServer(igreja);
            render.CleanIgreja();
            // comment the lines in bellow when the SaveNewOperadorInToServer do and work
            let sizeOf = app.Igrejas.list.length;
            igreja.idRef = sizeOf + 1;
            app.Igrejas.list.push(igreja);
            render.sucessoModal("Adicionar Igreja", "Igreja: " + igreja.denominacao + " adicionado com sucesso!");
            render.listarIgrejas();
        }
    }
    this.editIgreja = function (index) {
        let igreja = render.CreateEditIgreja();
        if (igreja.denominacao != "" && igreja.pais != "" && igreja.provincia != "") {
            // event that do the jquery-post ajax to save new Operator in to server
            render.SaveEditIgrejaInToServer(igreja);
            render.CleanModalIgreja();
            // comment the lines in bellow when the SaveEditIgrejaInToServer do and work
            app.Igrejas.list[index] = igreja;
            render.sucessoModal("Editar Igreja", "Igreja: " + igreja.denominacao + " foi editado com sucesso!");
            //render.listarIgrejas();
        }
    }
    var positionIgreja;
    // use this to render EditYourOperators
    this.EditIgreja = function (position) {
        let igreja = app.Igrejas.list[position];
        // alert("Nome: "+operador.nome+" Email: "+operador.email);
        $("#editDenominacao").val(igreja.denominacao);
        $("#editPais").val(igreja.pais);
        $("#editProvincia").val(igreja.provincia);
        
        $("#anteriorDenominacao").val(igreja.denominacao);
        $("#anteriorPais").val(igreja.pais);
        $("#anteriorProvincia").val(igreja.provincia);
        
        positionIgreja = position;
    }
    //

    // code membro 
    this.CreateNewMembro = function () {
        let Membro = {};
        Membro.nome = $("#nome").val();
        Membro.dataNascimento = $("#dataNascimento").val();
        Membro.apelido = $("#apelido").val();
        Membro.provincia = $("#provincia").val();
        Membro.natural = $("#natural").val();
        Membro.genero = $("#genero").val();
        Membro.estadoCivil = $("#estadoCivil").val();
        Membro.pai = $("#pai").val();
        Membro.mae = $("#mae").val();
        Membro.dataCasamento = $("#dataCasamento").val();
        Membro.habilitacoesLiterarias = $("#habilitacoesLiterarias").val();
        Membro.profissao = $("#profissao").val();
        Membro.endereco = $("#endereco").val();
        Membro.ocupacao = $("#ocupacao").val();
        Membro.casaNumero = $("#casaNumero").val();
        Membro.telefone = $("#telefone").val();
        Membro.grupoSanguineo = $("#grupoSanguineo").val();
        Membro.bi = $("#BINumero").val();
        Membro.dataEmissao = $("#dataEmissao").val();
        Membro.nomeIgreja = $("#igreja").val();
        Membro.funcaoIgreja = $("#funcaoIgreja").val();
        Membro.dataIngresso = $("#dataIngresso").val();
        Membro.desde = $("#desde").val();
        Membro.dataBatismo = $("#dataBatismo").val();
        Membro.despacho = $("#despacho").val();
        Membro.padrinho = $("#padrinho").val();
        Membro.direcaoAlocacao = $("#direcaoAlocacao").val();
        Membro.madrinha = $("#madrinha").val();
        Membro.categoria = $("#categoria").val();
        return Membro;
    }
    this.CleanMembro = function () {
        $("#nome").val("");
        $("#dataNascimento").val("");
        $("#apelido").val("");
        $("#provincia").val("");
        $("#natural").val("");
        $("#genero").val("");
        $("#estadocivil").val("");
        $("#pai").val("");
        $("#mae").val("");
        $("#dataCasamento").val("");
        $("#habilitacoesLiterarias").val("");
        $("#profissao").val("");
        $("#endereco").val("");
        $("#ocupacao").val("");
        $("#casaNumero").val("");
        $("#telefone").val();
        $("#grupoSanguineo").val("");
        $("#BINumero").val("");
        $("#dataEmissao").val("");
        $("#igreja").val("");
        $("#funcaoIgreja").val("");
        $("#dataIngresso").val("");
        $("#desde").val("");
        $("#dataBatismo").val("");
        $("#despacho").val("");
        $("#padrinho").val("");
        $("#direcaoAlocacao").val("");
        $("#madrinha").val("");
        $("#categoria").val("");
    }
    this.CreateEditMembro = function () {
        let Membro = {};
        Membro.idMembro = $("#editId").val();
        Membro.nome = $("#editNome").val();
        Membro.dataNascimento = $("#editDataNascimento").val();
        Membro.apelido = $("#editApelido").val();
        Membro.provincia = $("#editProvincia").val();
        Membro.natural = $("#editNatural").val();
        Membro.genero = $("#editGenero").val();
        Membro.estadoCivil = $("#editEstadoCivil").val();
        Membro.pai = $("#editPai").val();
        Membro.mae = $("#editMae").val();
        Membro.dataCasamento = $("#editDataCasamento").val();
        Membro.habilitacoesLiterarias = $("#editHabilitacoesLiterarias").val();
        Membro.profissao = $("#editProfissao").val();
        Membro.endereco = $("#editEndereco").val();
        Membro.ocupacao = $("#editOcupacao").val();
        Membro.casaNumero = $("#editCasaNumero").val();
        Membro.telefone = $("#editTelefone").val();
        Membro.grupoSanguineo = $("#editGrupoSanguineo").val();
        Membro.bi = $("#editBINumero").val();
        Membro.dataEmissao = $("#editDataEmissao").val();
        Membro.nomeIgreja = $("#editIgreja").val();
        Membro.funcaoIgreja = $("#editFuncaoIgreja").val();
        Membro.dataIngresso = $("#editDataIngresso").val();
        Membro.desde = $("#editDesde").val();
        Membro.dataBatismo = $("#editDataBatismo").val();
        Membro.despacho = $("#editDespacho").val();
        Membro.padrinho = $("#editPadrinho").val();
        Membro.direcaoAlocacao = $("#editDirecaoAlocacao").val();
        Membro.madrinha = $("#editMadrinha").val();
        Membro.categoria = $("#editCategoria").val();
        return Membro;
    }
    this.CleanModalMembro = function () {
        $("#editNome").val("");
        $("#editDataNascimento").val("");
        $("#editApelido").val("");
        $("#editProvincia").val("");
        $("#editNatural").val("");
        $("#editGenero").val("");
        $("#editEstadoCivil").val("");
        $("#editPai").val("");
        $("#editMae").val("");
        $("#editDataCasamento").val("");
        $("#editHabilitacoesLiterarias").val("");
        $("#editProfissao").val("");
        $("#editEndereco").val("");
        $("#editOcupacao").val("");
        $("#editCasaNumero").val("");
        $("#editTelefone").val("");
        $("#editGrupoSanguineo").val("");
        $("#editBINumero").val("");
        $("#editDataEmissao").val("");
        $("#editIgreja").val("");
        $("#editFuncaoIgreja").val("");
        $("#editDataIngresso").val("");
        $("#editDesde").val("");
        $("#editDataBatismo").val("");
        $("#editDespacho").val("");
        $("#editPadrinho").val("");
        $("#editDirecaoAlocacao").val("");
        $("#editMadrinha").val("");
        $("#editCategoria").val("");
    }
    this.addMembro = function () {
        let membro = render.CreateNewMembro();
        if (membro.nome != "" && membro.pai != "" && membro.mae != "") {
            // event that do the jquery-post ajax to save new Operator in to server
            render.SaveMembroInToServer(membro);
            render.CleanMembro();
            // comment the lines in bellow when the SaveNewOperadorInToServer do and work
            let sizeOf = app.Membros.list.length;
            membro.idRef = sizeOf + 1;
            app.Membros.list.push(membro);

            render.sucessoModal("Adicionar Membro", "Membro: " + membro.nome + " adicionado com sucesso!");
            render.listarMembros();
        }
    }
    this.editMembro = function (index) {
        let membro = render.CreateEditMembro();
        if (membro.nome != "" && membro.pai != "" && membro.mae != "") {
            // event that do the jquery-post ajax to save edit member in to server
           
            render.SaveEditMembroInToServer(membro);
            render.CleanModalMembro();
            // comment the lines in bellow when the SaveEditMembroInToServer do and work
            app.Membros.list[index] = membro;
            render.sucessoModal("Editar Membro", "Membro: " + membro.nome + " foi editado com sucesso!");
            //render.listarMembros();
        }
    }
    var positionMembro;
    // use this to render EditYourOperators
    this.EditMembro = function (position) {
        let membro = app.Membros.list[position];
        console.log("aqui: "+JSON.stringify(membro));
        // alert("Nome: "+operador.nome+" Email: "+operador.email);

        $("#editId").val(membro.idMembro);
        $("#editNome").val(membro.nome);
        $("#editDataNascimento").val(membro.dataNascimento);
        $("#editApelido").val(membro.apelido);

        $("#editProvincia").empty();
        $("#editProvincia").append($('<option/>').html(membro.provincia));
        for(let i = 0; i < app.provincias.list.length; i ++){

            let provincia = app.provincias.list[i];
            if(provincia != membro.provincia){

                $("#editProvincia").append($('<option/>').html(provincia));
            } 
        }

        $("#editNatural").val(membro.naturalidade);
        $("#editGenero").val(membro.genero);

       $("#editEstadoCivil").empty();
       $("#editEstadoCivil").append($('<option/>').html(membro.estadoCivil));
        for(let i = 0; i < app.estadoCivil.list.length; i ++){

            let estadoCivil = app.estadoCivil.list[i];
            if(estadoCivil != membro.estadoCivil){

                $("#editEstadoCivil").append($('<option/>').html(estadoCivil));
            } 
        }

        $("#editPai").val(membro.pai);
        $("#editMae").val(membro.mae);
        $("#editDataCasamento").val(membro.dataCasamento);
        $("#editHabilitacoesLiterarias").val(membro.habiltacao);
        $("#editProfissao").val(membro.profissao);
        $("#editEndereco").val(membro.endereco);
        $("#editOcupacao").val(membro.oucupacao);
        $("#editCasaNumero").val(membro.casaNumero);
        $("#editTelefone").val(membro.telefone);

        $("#editGrupoSanguineo").empty();
       $("#editGrupoSanguineo").append($('<option/>').html(membro.grupoSangueno));
        for(let i = 0; i < app.sangue.list.length; i ++){

            let sangue = app.sangue.list[i];
            if(sangue != membro.grupoSangueno){

                $("#editGrupoSanguineo").append($('<option/>').html(sangue));
            } 
        }
        $("#editBINumero").val(membro.numeroBI);
        $("#editDataEmissao").val(membro.dataEmissao);

        this.editCarregarSelectIgrejas (membro.igreja); 

        $("#editFuncaoIgreja").val(membro.funcaoNaIgreja);
        $("#editDataIngresso").val(membro.dataIngresso);
        $("#editDesde").val(membro.desde);
        $("#editDataBatismo").val(membro.dataBatismo);
        $("#editDespacho").val(membro.despacho);
        $("#editPadrinho").val(membro.padrinho);
        $("#editDirecaoAlocacao").val(membro.depertamentoDeAloccao);
        $("#editMadrinha").val(membro.madrinha);
        $("#editCategoria").val(membro.categoria);
        positionMembro = position;
    }

    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that request the ad and insert
    *  return the update list of operators
    */
    this.SaveMembroInToServer = function (membro) {
        // this request go at server and add new operator and return the update list of operators
        	
        $.post('adicionar_membro', membro, this.saveMembroInToServerCallBack);
    }
    // get the ajax response of SaveNewOperadorInToServer
    this.saveMembroInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into list of operators to update them wheather status is success 
        if (status == "success") {
            // update de list of the Operators 
            let listMembros = data;
            app.Membros.list = listMembros;
            // fill the list of operators on the table
           // render.listarMembros();
        } else {
            render.AlertFail("Erro ao Adicionar", "erro ao adicionar Membro");
        }
    }

    this.DataToPrint = function (membro) {
        localStorage.setItem('nome', membro.nome);
        localStorage.setItem('dataNascimento', membro.dataNascimento);
        localStorage.setItem('apelido', membro.apelido);
        localStorage.setItem('provincia', membro.provincia);
        localStorage.setItem('habilitacaoLiteraria', membro.habiltacao);
        localStorage.setItem('natural', membro.naturalidade);
        localStorage.setItem('profisao', membro.profissao);
        localStorage.setItem('endereco', membro.endereco);
        localStorage.setItem('ocupacao', membro.oucupacao);
        localStorage.setItem('numeroCasa', membro.casaNumero);
        localStorage.setItem('grupoSanguineo', membro.grupoSangueno);
        localStorage.setItem('telefone', membro.telefone);
        localStorage.setItem('numeroBi', membro.numeroBI);
        localStorage.setItem('dataEmissao', membro.dataEmissao);
        localStorage.setItem('pai', membro.pai);
        localStorage.setItem('mae', membro.mae);
        localStorage.setItem('estadoCivil', membro.estadoCivil);
        localStorage.setItem('dataCasamento', membro.dataCasamento);
        localStorage.setItem('genero', membro.genero);
        localStorage.setItem('igreja', membro.igreja);
        localStorage.setItem('funcaoIgreja', membro.funcaoNaIgreja);
        localStorage.setItem('dataIngresso', membro.dataIngresso);
        localStorage.setItem('desde', membro.desde);
        localStorage.setItem('despacho', membro.despacho);
        localStorage.setItem('direcaoAlocacao', membro.depertamentoDeAloccao);
        localStorage.setItem('categoria', membro.categoria);
        localStorage.setItem('dataBaptismo', membro.dataBatismo);
        localStorage.setItem('padrinho', membro.padrinho);
        localStorage.setItem('madrinha', membro.madrinha);
       
        window.location.replace("exportar");
        
     
    }
    // fragment that create a success Modal
    this.sucessoModal = function (title, msg) {
        Swal.fire({
            title: title,
            text: msg,
            type: 'success',
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonColor: '#3b5de7',
            //timer: 2000
            //cancelButtonColor: "#f46a6a",
        }).then(function (result) {
            if (result.value) {
                // window.location.href = "{{ route('login') }}";
            }
        });
    }
    // fragment that create a alert the warning Modal
    this.AlertModal = function (title, msg, list, position, func, type) {
        Swal.fire({
            title: title,
            text: msg,
            type: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: '#3b5de7',
            //timer: 2000
            cancelButtonColor: "#f46a6a",
        }).then(function (result) {
            if (result.value) {
                //Logic to delete the item
                if (type == "igreja") {
                    render.SaveDeleteIgrejaInToServer(list[position]);
                } else if (type == "operador") {
                    render.SaveDeleteOperadorInToServer(list[position]);
                } else if (type == "membro") {
                    render.SaveDeleteMembroInToServer(list[position]);
                }
                // comment this two lines bellow when the server request is running 
                list.splice(position, 1);
                func();
            } else {
                return false;
            }
        });
    }
    // fragment that create a error Modal to inform one fail
    this.AlertFail = function (title, msg) {
        Swal.fire({
            title: title,
            text: msg,
            type: 'error',
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonColor: '#3b5de7',
            //timer: 2000
            //cancelButtonColor: "#f46a6a",
        }).then(function (result) {
            if (result.value) {
                // window.location.href = "{{ route('login') }}";
            }
        });
    }
    // methods that load all datas of the churchs into a formact list
    this.LoadAllIgrejas = function () {
        // this request go at server and return the list of the churchs 
        
        $.get('buscar_igrejas', null, this.loadAllIgrejasCallBack);
        // comment the line bellow when the LoadAllIgrejasIntoServer do and work 
        render.listarIgrejas();
    }
    // get the ajax response of LoadAllIgrejas
    
    this.loadAllIgrejasCallBack = function (data, status) {
    	
       
        // add the data into variable list of ads wheather status is success 
        if (status == "success") {
            // update de list of the churchs 
            let listIgrejas = data;
            app.Igrejas.list = listIgrejas;
            // fill the list of Igrejas on the table
            render.listarIgrejas();
        }
    }
 
    this.LoadAllMembers = function () {
        // this request go at server and return the list of members 
        $.get('lista_membros', null, this.loadAllMembersCallBack);
        // comment the line bellow when the LoadAllMembersIntoServer do and work 
        
    }
    // get the ajax response of LoadAllMembersCallBack
    this.loadAllMembersCallBack = function (data, status) {
        console.log("membros response data::" + JSON.stringify(data));
        console.log("response status::" + status);
        // add the data into variable list of ads whether status is success 
        if (status == "success") {
            // update de list of the Operators 
            app.Membros.list = data;
            // fill the list of operators on the table
            render.listarMembros();
        }
    }
    this.LoadAllOperators = function () {
        // this request go at server and return the list of operators 
        $.get('buscar_operadores', null, this.loadAllOperatorsCallBack);
        // comment the line bellow when the LoadAllOperatorsIntoServer do and work 
        render.listarOperadores();
    }
    // get the ajax response of LoadAllAds
    this.loadAllOperatorsCallBack = function (data, status) {
    
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into variable list of ads whether status is success 
        if (status == "success") {
            // update de list of the Operators 
            let listOperators = data;
            app.Operadores.list = listOperators;
            // fill the list of operators on the table
            render.listarOperadores();
        }
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that request the ad and insert
    *  return the update list of operators
    */
    this.SaveNewOperadorInToServer = function (operador) {
    	console.log("aqui: "+JSON.stringify(operador));
        // this request go at server and add new operator and return the update list of operators
        $.post('adicionar_operador', operador, 'SaveNewOperadorInToServerCallBack');
    }
    // get the ajax response of SaveNewOperadorInToServer
    this.SaveNewOperadorInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into list of operators to update them wheather status is success 
        if (status == "success") {
            // update de list of the Operators 
            render.sucessoModal("Adicionar Operador", "Operador adicionado com sucesso!");
            let listOperators = data;
            app.Operadores.list = listOperators;
            render.sucessoModal("Adicionar Operador", "Operador adicionado com sucesso!");
            // fill the list of operators on the table
            render.listarOperadores();
        } else {
            render.AlertFail("Erro ao Adicionar", "erro ao adicionar Operador");
        }
    }

    this.SaveNewIgrejaInToServer = function (igreja) {
        // this request go at server and add new church and return the update list of the churchs
        
        $.post('adicionar_igreja', igreja, this.saveNewIgrejaInToServerCallBack);
    }
    // get the ajax response of SaveNewIgrejaInToServer
    this.saveNewIgrejaInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into list of the churchs to update them whether status is success 
        if (status == "success") {
            // update de list of the churchs 
            render.sucessoModal("Adicionar Igreja", "Igreja adicionado com sucesso!");
            let listIgrejas = data;
            app.Igrejas.list = listIgrejas;
            // fill the list of the churchs on the table
            //render.listarIgrejas();
            //location.reload(true);
        } else {
            render.AlertFail("Erro ao Adicionar", "erro ao adicionar Igreja");
        }
    }

    this.SaveNewMembroInToServer = function (membro) {
        // this request go at server and add new member and return the update list of operators
        $.post('SaveNewMembroInToServer', 'membro', 'SaveNewMembroInToServerCallBack');
    }
    // get the ajax response of SaveNewMembroInToServer
    this.SaveNewMembroInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into list of the members to update them wheather status is success 
        if (status == "success") {
            // update de list of the members 
            render.sucessoModal("Adicionar Membro", "Membro adicionado com sucesso!");
            let listMembros = data;
            app.Membros.list = listMembros;
            // fill the list of operators on the table
            render.listarMembros();
        } else {
            render.AlertFail("Erro ao Adicionar", "erro ao adicionar Membro");
        }
    }
    // edits requests

    this.SaveEditOperadorInToServer = function (operador) {
        // this request go at server and edit operator and return the update list of operators
        
        $.post('atualizar_operador', operador, this.saveEditOperadorInToServerCallBack);
    }
    // get the ajax response of SaveEditOperadorInToServer
    this.saveEditOperadorInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into list of operators to update them whether status is success 
        if (status == "success") {
            // update de list of the Operators 
            let listOperators = data;
            app.Operadores.list = listOperators;
            render.sucessoModal("Editar Operador", "Operador foi editado com sucesso!");
            // fill the list of the operators on the table
            //render.listarOperadores();
        } else {
            render.AlertFail("Erro ao Editar", "erro ao editar Operador");
        }
    }

    this.SaveEditIgrejaInToServer = function (igreja) {
        // this request go at server and edit church and return the update list of the churchs
        $.post('atualizar_igreja', igreja, this.saveEditIgrejaInToServerCallBack);
    }
    // get the ajax response of SaveEditIgrejaInToServer
    this.saveEditIgrejaInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into list of the churchs to update them whether status is success 
        if (status == "success") {
            // update de list of the churchs
            render.sucessoModal("Atualizar Igreja", "Igreja editado com sucesso!");
            let listIgrejas = data;
            app.Igrejas.list = listIgrejas;
            // fill the list of the churchs on the table
           // render.listarIgrejas();
           location.reload(true);
        } else {
            render.AlertFail("Erro ao Editar", "erro ao editar Igreja");
        }
    }

    this.SaveEditMembroInToServer = function (membro) {
        // this request go at server and edit member and return the update list of the members
      $.post('atualizar_membro', membro, this.saveEditMembroInToServerCallBack);
    }
    // get the ajax response of SaveEditMembroInToServer
    this.saveEditMembroInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into list of the members to update them wheather status is success 
        if (status == "success") {
            // update de list of the members 
            render.sucessoModal("Editar Membro", "Membro editado com sucesso!");
            let listMembros = data;
            app.Membros.list = listMembros;
            // fill the list of the members on the table
            //render.listarMembros();
            location.reload(true);
        } else {
            render.AlertFail("Erro ao Editar", "erro ao editar membro");
        }
    }
    // end edits

    // deletes requests

    this.SaveDeleteOperadorInToServer = function (operador) {
        // this request go at server and delete operator and return the update list of operators
        $.post('remover_operador', operador, 'SaveDeleteOperadorInToServerCallBack');
    }
    // get the ajax response of SaveDeleteOperadorInToServer
    this.SaveDeleteOperadorInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into list of operators to update them wheather status is success 
        if (status == "success") {
            // update de list of the Operators 
            render.sucessoModal("Remover Operador", "Operador deletado com sucesso!");
            let listOperators = data;
            app.Operadores.list = listOperators;
            // fill the list of operators on the table
            render.listarOperadores();
        } else {
            render.AlertFail("Erro ao Deletar", "erro ao deletar Operador");
        }
    }

    this.SaveDeleteIgrejaInToServer = function (igreja) {
        // this request go at server and delete church and return the update list of the churchs
       
        $.post('remover_igreja', igreja, this.saveDeleteIgrejaInToServerCallBack);
    }
    // get the ajax response of SaveDeleteIgrejaInToServer
    this.saveDeleteIgrejaInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into list of the churchs to update them wheather status is success 
        if (status == "success") {
            // update de list of the churchs
            render.sucessoModal("Remover Igreja", "Igreja deletada com sucesso!");
            let listIgrejas = data;
            app.Igrejas.list = listIgrejas;
            // fill the list of the churchs on the table
           // render.listarIgrejas();
             location.reload(true);
        } else {
            render.AlertFail("Erro ao Deletar", "erro ao deletar Igreja");
        }
    }

    this.SaveDeleteMembroInToServer = function (membro) {
        // this request go at server and delete member and return the update list of the members
        console.log("membro: "+JSON.stringify(membro));
        $.post('remover_membro', membro, this.saveDeleteMembroInToServerCallBack);
    }
    // get the ajax response of SaveDeleteMembroInToServer
    this.saveDeleteMembroInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into list of the members to update them wheather status is success 
        if (status == "success") {
            // update de list of the members 
            render.sucessoModal("Deletar Membro", "Membro deletado com sucesso!");
            let listMembros = data;
            app.Membros.list = listMembros;
            // fill the list of the members on the table
            //render.listarMembros();
        } else {
            render.AlertFail("Erro ao Deletar", "erro ao deletar Membro");
        }
    }
    // end deletes
    this.listarIgrejas = function () {
        /*
        load the list of the churchs on the table
        */
        let tblIgrejas = $("#itemIgreja");
        tblIgrejas.empty();
        let sizeOf = app.Igrejas.list.length;
        for (let index = 0; index < sizeOf; index++) {
            const element = app.Igrejas.list[index];
            let trIgrejas = $('<tr class="tr">');
            console.log(element);
            let id = $("<td>");
             if(typeof(element.idRef) != "undefined"){
            
            	id.text(element.idRef);
            	
            }else{
            
            	id.text(element.id);
            }
            
            
            let denominacao = $("<td>");
            denominacao.text(element.denominacao);
            let pais = $("<td>");
            pais.text(element.pais);
            let provincia = $("<td>");
            provincia.text(element.provincia);
            let edit = $(' <td><a href="#" class="btn btn-primary btn-sm"><i class="fa fa-edit" data-toggle="modal" data-target="#edit"></i></a></td>');
            let remove = $('<td><a href="#" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></a></td>');
            edit.click(
                function () {
                    let position = index;
                    // alert(index+1);
                    render.EditIgreja(position);
                }
            );
            remove.click(function () {
                let position = index;
                render.DeleteIgreja(position);
            });
            trIgrejas.append(id);
            trIgrejas.append(denominacao);
            trIgrejas.append(pais);
            trIgrejas.append(provincia);
            trIgrejas.append(edit);
            trIgrejas.append(remove);
            tblIgrejas.append(trIgrejas);
        }
    }

    this.DeleteIgreja = function (position) {
        // the modal alert to permit confirm wheather delete or not
        render.AlertModal("Deletar Igreja", "Desejas mesmo deletar esta Igreja?", app.Igrejas.list, position, render.listarIgrejas, "igreja");
    }
    $("#editIgreja").click(
        function () {
           // render.editIgreja(positionIgreja);
            
        }
    );
    $("#addIgreja").click(
        function () {
            render.addIgreja();
        }
    );
    this.listarMembros = function () {
        /*
        load the list of members on the table
        */
        let tblMembros = $("#itemMembro");
        tblMembros.empty();
        let sizeOf = app.Membros.list.length;
        for (let index = 0; index < sizeOf; index++) {
            const element = app.Membros.list[index];
            let trMembros = $('<tr class="tr">');
            console.log(element);
            let id = $("<td>");
            if(typeof(element.idRef) != "undefined"){
            
            	id.text(element.idRef);
            	
            }else{
            
            	id.text(element.idMembro);
            }
            let nome = $("<td>");
            nome.text(element.nome);
            let igreja = $("<td>");
            igreja.text(element.nomeIgreja);
            let edit = $(' <td><a href="#" class="btn btn-primary btn-sm"><i class="fa fa-edit" data-toggle="modal" data-target="#edit"></i></a></td>');
            let remove = $('<td><a href="#" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></a></td>');
            let details = $('<td><a href="#" target="_self" class="btn btn-success btn-sm"><i id="printMembro" class="fa fa-chart-area"></i></a></td>');
            edit.click(
                function () {
                    let position = index;
                    
                    render.EditMembro(position);
                }
            );
            details.click(
                
                function () {
                    //Logic to print the item
                    //let m = app.Membros.list[positionMembro];
                
                   render.DataToPrint(element);
                   
                }
            );
            remove.click(function () {
                let position = index;
                render.DeleteMembro(position);
            });
            trMembros.append(id);
            trMembros.append(nome);
            trMembros.append(igreja);
            trMembros.append(details);
            trMembros.append(edit);
            trMembros.append(remove);
            tblMembros.append(trMembros);
        }
    }
    this.listarOperadores = function () {
        /*
        load the list of operators on the table
        */
      
        let tblOperadores = $("#itemOperador");
        tblOperadores.empty();
        let sizeOf = app.Operadores.list.length;
        for (let index = 0; index < sizeOf; index++) {
            const element = app.Operadores.list[index];
            let trOperadores = $('<tr class="tr">');
            console.log("operador: "+JSON.stringify(element));
            
            let id = $("<td>");
            //id.hide();
          
            if(typeof(element.idRef) != "undefined"){
            
            	id.text(element.idRef);
            	
            }else{
            
            	id.text(element.id);
            }
            
            let nome = $("<td>");
            
          	nome.text(element.nome);
          
           
            let email = $("<td>");
            email.text(element.email);
            let edit = $(' <td><a href="#" class="btn btn-primary btn-sm"><i class="fa fa-edit" data-toggle="modal" data-target="#edit"></i></a></td>');
            let remove = $('<td><a href="#" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></a></td>');
            edit.click(
                function () {
                    let position = index;
                    // alert(index+1);
                    render.EditOperador(position);
                }
            );
            remove.click(function () {
                let position = index;
                render.DeleteOperador(position);
            });
            trOperadores.append(id);
            trOperadores.append(nome);
            trOperadores.append(email);
            trOperadores.append(edit);
            trOperadores.append(remove);
            tblOperadores.append(trOperadores);
        }
    }

    this.DeleteOperador = function (position) {
        // the modal alert to permit confirm whether delete or not
        render.AlertModal("Deletar Operador", "Desejas deletar este Operador?", app.Operadores.list, position, render.listarOperadores, "operador");
    }
    $("#editOperador").click(
        function () {
            render.editOperador(positionOperador);
             location.reload(true);
           
        }
    );
    $("#addOperador").click(
        function () {
            render.addOperador();
            location.reload(true);
           
        }
    );
    this.DeleteMembro = function (position) {
        // the modal alert to permit confirm wheather delete or not
        render.AlertModal("Deletar Membro", "Desejas mesmo deletar este membro?", app.Membros.list, position, render.listarMembros, "membro");

    }
    $("#editMembro").click(
        function () {
            //Logic to edit the item
            render.editMembro(positionMembro);
        }
    );
    $("#addMembro").click(
        function () {
            //Logic to delete the item
            render.addMembro();
        }
    );
    /* new code finish*/

}

// catch the object Application
var app = Application;
// Instantiate the render constructor 
var render = new Render(app);
/*
*/
//listar Operadores
render.LoadAllOperators();
render.LoadAllMembers();
render.LoadAllIgrejas();

render.listarProvincias();
render.carregarSelectIgrejas();
render.listarSangues();




