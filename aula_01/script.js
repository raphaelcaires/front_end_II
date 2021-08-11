function media(notas){
  let notaFinal = 0;
  // Percorrendo o array e imprimindo no console.
  notas.forEach(element => {
    console.log(`Sua nota no bimestre foi ${element}`)
    notaFinal += element;
    return notaFinal;
  });

  // Calculando a média.l
  let mediaFinal = notas.reduce((acc,value) => acc + value) / notas.length;

  // Verificando se foi aprovado e imprimindo o resultado no console.
  mediaFinal > 7 ? console.log(`Parabéns! Sua média final foi ${mediaFinal}`) : console.log(`Sua média final foi ${mediaFinal}, vamos estudar mais uma semana.`);
};

media([7, 8, 9, 7]);
media([7, 8, 2, 3]);

/* function somarElementos(arraySoma){
  let soma = 0; arraySoma.forEach(n => { soma = soma + n console.log(soma);
  });
}
const array = [1, 2, 3, 4]
somarElementos(array); */