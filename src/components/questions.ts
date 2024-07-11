export interface Question {
  id: number;
  title: string;
  question: string;
}

export const questions: Question[] = [
  {
    id: 1,
    title: 'Encontrar o índice de um elemento',
    question: 'Dado um array de números, encontre o índice do número 10. Se não estiver presente, retorne -1.'
  },
  {
    id: 2,
    title: 'Dobrar os valores',
    question: 'Dado um array de números, crie um novo array onde cada número seja o dobro do valor original.'
  },
  {
    id: 3,
    title: 'Extrair substring',
    question: 'Dada uma string, retorne uma substring que começa no índice 2 e termina no índice 5'
  },
  {
    id: 4,
    title: 'Somar valores',
    question: 'Dado um array de números, use reduce para somar todos os valores do array.'
  },
  {
    id: 5,
    title: 'Aplicar função a cada elemento',
    question: 'Dado um array de números, use forEach para imprimir cada número no console.'
  },
  {
    id: 6,
    title: 'Filtrar itens',
    question: 'Dado um array de palavras, crie um novo array contendo apenas as palavras que têm mais de 3 letras.'
  },
  {
    id: 7,
    title: 'Encontrar o maior número',
    question: 'Dado um array de números, use reduce para encontrar o maior número.'
  },
  {
    id: 8,
    title: 'Concatenar strings',
    question: 'Dado um array de strings, use reduce para concatenar todas as strings em uma única string.'
  },
  {
    id: 9,
    title: 'Remover duplicatas',
    question: 'Dado um array de números, retorne um novo array sem elementos duplicados.'
  },
  {
    id: 10,
    title: 'Transformar matriz de objetos',
    question: 'Dado um array de objetos onde cada objeto tem uma propriedade name e age, crie um novo array que contenha apenas os nomes das pessoas.'
  },
  {
    id: 11,
    title: 'Classificar números',
    question: 'Dado um array de números, ordene-os em ordem crescente.'
  },
  {
    id: 12,
    title: 'Inverter uma string',
    question: 'Dada uma string, retorne uma nova string com os caracteres na ordem inversa.'
  },
  {
    id: 13,
    title: 'Verificar palíndromo',
    question: 'Crie uma função que verifica se uma string é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente).'
  },
  {
    id: 14,
    title: 'Calcular fatorial',
    question: 'Crie uma função que calcula o fatorial de um número inteiro não negativo.'
  },
  {
    id: 15,
    title: 'Somar matrizes',
    question: 'Dadas duas matrizes de mesmo tamanho, crie uma função para somar os elementos correspondentes das duas matrizes e retornar uma nova matriz resultante.'
  },
  {
    id: 16,
    title: 'Encontre números primos',
    question: 'Crie uma função que retorna todos os números primos até um número dado.'
  },
  {
    id: 17,
    title: 'Verificar se é número',
    question: 'Crie uma função que verifica se um dado valor é um número.'
  },
  {
    id: 18,
    title: 'Gerar números aleatórios',
    question: 'Crie uma função que gere um número inteiro aleatório entre dois valores dados.'
  },
  {
    id: 19,
    title: 'Encontre o valor mínimo',
    question: 'Dado um array de números, crie uma função que retorna o valor mínimo.'
  },
  {
    id: 20,
    title: 'Converter para maiúsculas',
    question: 'Dado um array de strings, crie uma função que retorna um novo array com todas as strings convertidas para letras maiúsculas.'
  },
  {
    id: 21,
    title: 'Contar ocorrências',
    question: 'Dado um array de números, crie uma função que conte quantas vezes cada número aparece no array e retorne um objeto com os números como chaves e as contagens como valores.'
  },
  {
    id: 22,
    title: 'Removedor de valores falsos',
    question: 'Dado um array, crie uma função que remova todos os valores falsy (false, null, 0, "", undefined, NaN) do array.'
  },
  {
    id: 23,
    title: 'Encontrar a média',
    question: 'Dado um array de números, crie uma função que retorne a média dos números.'
  },
  {
    id: 24,
    title: 'Agrupar por propriedade',
    question: 'Dado um array de objetos, crie uma função que agrupe os objetos por uma propriedade específica e retorne um objeto onde as chaves são os valores dessa propriedade e os valores são arrays de objetos que têm essa propriedade.'
  },
  {
    id: 25,
    title: 'Misture matrizes',
    question: 'Dado dois arrays de números ordenados, crie uma função que mescle os dois arrays em um único array ordenado.'
  },
  {
    id: 26,
    title: 'Objeto de transformação',
    question: 'Dado um objeto, crie uma função que inverta as chaves e valores desse objeto. (Assuma que todos os valores do objeto são strings únicas).'
  },
  {
    id: 27,
    title: 'Contar vogais',
    question: 'Dada uma string, crie uma função que conte o número de vogais na string.'
  },
  {
    id: 28,
    title: 'Matriz de pares',
    question: 'Dado um array de números, crie uma função que retorne um novo array contendo apenas os números pares.'
  },
  {
    id: 29,
    title: 'Verificar anagramas',
    question: 'Crie uma função que verifique se duas strings são anagramas uma da outra.'
  },
  {
    id: 30,
    title: 'Multiplicar matriz',
    question: 'Dadas duas matrizes, crie uma função que retorne o produto matricial das duas matrizes. (Assuma que as matrizes têm tamanhos compatíveis para multiplicação).'
  }
];
