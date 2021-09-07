const input1 = document.querySelector('input#string1');
const Idnt = document.querySelector('input#botao');

input1.addEventListener('keypress', function(event){

    if(event.keyCode > 48 && event.keyCode < 58 ){
        event.preventDefault();
    }
});

function palindromo(palavra){

    let Psplit = palavra.split("");
    let Pjoin = Psplit.reverse();
    return Pjoin.join('');
}

function ident(i, p){

    if(i == p){
        return `Sim &#9989`;

    }
    else{
        return `Não &#10060`;

    }
}

Idnt.addEventListener('click', function(e){

    if(input1.value.length==0){
        window.alert('[ERRO] Dados Inválidos !!!');

    }else{
        let result = document.querySelector('div#res');
        let palavra = input1.value.toLowerCase();
        let divP = document.querySelector('p#divP'); 

        divP.innerHTML = (`<b> ${input1.value}</b> é um Palíndromo ?`);
        result.innerHTML = `${ident(palavra, palindromo(palavra))}`;

    
    }
});


