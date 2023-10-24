class Discovoador {
    vacas
    velocidade
    
    constructor(){
        this.vacas = [];
        this.velocidade = 0;
    }

    acelerar(){
        this.velocidade++
        if (this.velocidade > 10) {
            this.velocidade = 10;
        }
         }
    
    frear(){
        this.velocidade = 0;
    }
    abduzir(vaca){
        this.vacas.push(vaca);
    }
}

class Vaca {
    nome
    cor
}

let disco1 = new Discovoador();
let vaca1 = new Vaca();
let vaca2 = new Vaca();

vaca1.nome = 'Berenice';
vaca1.cor = 'Branca';

vaca2.nome = 'Joelma';
vaca2.cor = 'Amarela';

/* console.table(disco1);
console.table(vaca1); */

disco1.abduzir(vaca1);
disco1.abduzir(vaca2);
console.table(disco1.vacas);
