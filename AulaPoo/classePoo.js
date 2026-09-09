// criação de classes em javascript
class ContaBancaria {
    #saldo;
    // construtor - Método que chama novo objeto de classe criado
    constructor(titular, limiteCrédito, saldoInicial=0){
        this.titular = titular;
        this.limiteCrédito = limiteCrédito;
        this.#saldo = saldoInicial;
    }

    // Getter - Método q fornece valores de um atributo
    get saldo(){
        return this.#saldo; 
    }

    // Métodos da conta corrente:
    // Método depositar (rececbe um valor e adiciona o mesmo ao saldo):
    depositar(valor){
        if (valor <0){
            throw new Error("O valor a ser depositado deve ser maior que zero");
        }

        this.#saldo += valor;
    }
// Método sacar(Recebe um valor a ser sacado e atualiza o saldo liberando o saque)
    sacar(valor){
        if (this.limiteCrédito <= valor){
            //throw new Error("saque de valor negativo nao é possivel!")
        }

        if (this.#saldo >= valor){
            this.#saldo -= valor
        }
                
        else{
            throw new Error("Erro: saldo insuficiente")
        }
    }
}

//Criar uma classe que é filha da classe conta corrente: classe chequeEspecial - feito
//no nome classe, logo após o nome, extends classeMãe - feito
//definir um novo atributo chamado limite de crédito
//redefinir o construtor -> pq agr eu tenho o atributo limite de crédito
//redefinir o metodo sacar pq agr eu pago saques com valores menores ou iguais ao saldo
class chequeEspecial extends ContaBancaria {
    constructor(titular, saldoInicial, limiteCrédito){
        this.limiteCrédito = limiteCrédito; 
    }
}
