
async function buscaEndereco(cep) { // deixando a assincronicidade com o termo "async" 
    let mensagemErro = document.getElementById('erro'); //vamos preparar uma mensagem de erro pro usuario e tratar dentro do catch
    mensagemErro.innerHTML = "";
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`); // só podemos usar a palavra await se tiver dentro de uma função async
        //passando o cep por parametro e passando pro link    
        let consultaCEPConvertida = await consultaCEP.json(); //pegando e transformando para json
        if (consultaCEPConvertida.erro) { // como a API torna um verdadeiro caso surja um erro espefico, vamos fazer um if
            throw Error('CEP NÃO EXISTENTE');
        }
        //acessando os elementos pelo DOM
        let cidade = document.getElementById('cidade');
        let estado = document.getElementById('estado')
        let logradouro = document.getElementById('endereco')
        let bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade; //trazendo o dado diretamente da API, pelo nome do parametro dentro da mesma
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;


        return consultaCEPConvertida;
    } catch (erro) {//tratamento de erros com try(tentar) catch(pegar) 
        mensagemErro.innerHTML= `<p>CEP inválido. Tente Novamente!</p>`
        console.log(erro)
    }

}
var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value)); //evento focusout é quando a pessoa clica fora do input
