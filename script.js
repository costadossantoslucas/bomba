class BombaCombustivel {
    constructor(tipoCombustivel, valorLitro, quantidadeCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
        this.atualizarDisplay();
    }

    abastecerPorValor(valor) {
        let litrosAbastecidos = valor / this.valorLitro;
        if (litrosAbastecidos <= this.quantidadeCombustivel) {
            this.quantidadeCombustivel -= litrosAbastecidos;
            alert(`Você abasteceu ${litrosAbastecidos.toFixed(2)} litros de ${this.tipoCombustivel}.`);
        } else {
            alert("Quantidade de combustível insuficiente na bomba.");
        }
        this.atualizarDisplay();
    }

    abastecerPorLitro(litros) {
        if (litros <= this.quantidadeCombustivel) {
            let valorAPagar = litros * this.valorLitro;
            this.quantidadeCombustivel -= litros;
            alert(`Você abasteceu ${litros.toFixed(2)} litros de ${this.tipoCombustivel} por R$ ${valorAPagar.toFixed(2)}.`);
        } else {
            alert("Quantidade de combustível insuficiente na bomba.");
        }
        this.atualizarDisplay();
    }

    alterarValor(novoValor) {
        this.valorLitro = novoValor;
        alert(`O novo valor do litro do ${this.tipoCombustivel} é R$ ${this.valorLitro.toFixed(2)}.`);
        this.atualizarDisplay();
    }

    alterarCombustivel(novoTipo) {
        this.tipoCombustivel = novoTipo;
        alert(`O tipo de combustível foi alterado para ${this.tipoCombustivel}.`);
        this.atualizarDisplay();
    }

    atualizarDisplay() {
        document.getElementById('quantidadeCombustivel').textContent = `${this.quantidadeCombustivel.toFixed(2)} litros`;
        document.getElementById('precoLitro').textContent = `R$ ${this.valorLitro.toFixed(2)}`;
        document.getElementById('tipoCombustivel').textContent = this.tipoCombustivel;
    }
}

// Inicializando a bomba
let bomba = new BombaCombustivel('Gasolina Comum', 6.39, 500);

// Funções para o HTML interagir com o JS
function abastecerPorValor() {
    let valor = parseFloat(prompt("Informe o valor em R$: "));
    if (!isNaN(valor) && valor > 0) {
        bomba.abastecerPorValor(valor);
    } else {
        alert("Valor inválido.");
    }
}

function abastecerPorLitro() {
    let litros = parseFloat(prompt("Informe a quantidade de litros: "));
    if (!isNaN(litros) && litros > 0) {
        bomba.abastecerPorLitro(litros);
    } else {
        alert("Quantidade inválida.");
    }
}

function alterarCombustivel() {
    let novoTipo = prompt("Escolha o tipo de combustível: G = Gasolina Comum, E = Etanol, AD = Aditivada").toUpperCase();
    if (novoTipo === 'G') {
        bomba.alterarCombustivel('Gasolina Comum');
    } else if (novoTipo === 'E') {
        bomba.alterarCombustivel('Etanol');
    } else if (novoTipo === 'AD') {
        bomba.alterarCombustivel('Gasolina Aditivada');
    } else {
        alert("Escolha inválida.");
    }
}

function alterarValor() {
    let novoValor = parseFloat(prompt("Informe o novo valor por litro: "));
    if (!isNaN(novoValor) && novoValor > 0) {
        bomba.alterarValor(novoValor);
    } else {
        alert("Valor inválido.");
    }
}
