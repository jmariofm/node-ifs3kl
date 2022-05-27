const saldoConta = [100, 200, 300, 400, 500];

const total = saldoConta.reduce((acumulador, valor) => acumulador + valor);

console.log(total);
