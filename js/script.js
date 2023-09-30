console.log("Mandando oi pro amigo");


function mandaMensagem() {
    //esses consoles só serão chamados quando a função for chamada 

    //? Assim, se torna um código sincrono
    console.log("Tudo bem? ")
    console.log("Vou te mandar uma solicitação")
    console.log("sOLICITAÇÃO RECEBIDA")
}
//quando adicionamos a função dentro do setTimeOut
setTimeout(mandaMensagem(), 5000);

console.log("Tchau filha da mãe")