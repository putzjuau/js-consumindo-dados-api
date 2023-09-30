
// Lidando com Fetch API
//?Fetch é um parametro assincrono, que tem como parametro a URL da API, em si, é uma PROMISSE
var consultaCEP = fetch('https://viacep.com.br/ws/01000250/json/')
    .then(resposta => resposta.json()) //ent transforme resposta em um arquivo json, POIS, os dados vem em formato de bytes e por isso não conseguiriamos ler eels
    .then(r => {
        if (r.erro) { //Aqui estamos tratando o erro. Pegando ele 
            throw Error('Esse CEP não existe!') //?estamos declarando o erro que vai ser, para assim, o catch a seguir pegar esse erro
        } else 
            console.log(r)
    })
    //estamos pegando o valor de forma legivel                                                                                                 
    //vamos tratar erros dessa requisição da API
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluido')); 