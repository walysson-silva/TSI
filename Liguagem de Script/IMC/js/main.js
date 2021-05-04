const alturaElemento = document.getElementById('altura');
const pesoElemento = document.getElementById('peso');
const imcElemento = document.getElementById('#imc'); //resultado

const calc = document.getElementsByTagName('btn');//botao clique submit

calc.addEventListener('click', calculadoraDeIMC);

function valorImc(peso, altura, sexo) {//função com variáveis do peso altura e sexo, retornando possíveis condições
    const imc = peso / (altura * altura) //fórmula do cálculo do IMC

    if( sexo ===  'masculino'){
        if( imc < 20.7 ){
            return 'Abaixo do peso';
        }else if( imc < 26.4 ){
            return 'Peso Normal';
        }else if( imc < 27.8 ){
            return 'Marginalmente Acima do Peso';
        }else if( imc < 31.1 ){
            return 'Acima do Peso Ideal';
        }else {
            return 'Obeso';
        }        
    }else {
        if( imc < 19.1 ){
            return 'Abaixo do peso';
        }else if( imc < 25.8 ){
            return 'Peso Normal';
        }else if( imc < 27.3 ){
            return 'Marginalmente Acima do Peso';
        }else if( imc < 32.3 ){
            return 'Acima do Peso Ideal';
        }else {
            return 'Obeso';
        }
    }
}

function calculadoraDeIMC() {
    const sexo = document.querySelector('input[name=sexo]:checked').value;//recebendo valor do .checked
    const altura = alturaElemento.value;//recebendo valor da altura
    const peso = pesoElemento.value;//recebendo valor do peso
    const valorDoImc = valorImc(peso, altura, sexo)//variável recebendo valor da fórmula do IMC
    imc.value = valorDoImc;//trocar valor do input de id #imc
    console.log(valorDoImc);
}
