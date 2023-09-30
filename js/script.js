
/* No exemplo anterior, usamos then dentro de then e por ai vai
    Porem isso não é aceitavel, pois se torna um "callback hell", inferno de callback*/
async function buscaEndereco(cep) { // deixando a assincronicidade com o termo "async" 
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`); // só podemos usar a palavra await se tiver dentro de uma função async
                                                                //passando o cep por parametro e passando pro link    
        var consultaCEPConvertida = await consultaCEP.json(); //pegando e transformando para json
        if (consultaCEPConvertida.erro) { // como a API torna um verdadeiro caso surja um erro espefico, vamos fazer um if
            throw Error('CEP NÃO EXISTENTE');
        }
        return consultaCEPConvertida;
    } catch (erro) {//tratamento de erros com try(tentar) catch(pegar) 
        console.log(erro)
    }

}
