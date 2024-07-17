export interface Method{
  name: string;
  description: string;
  syntax: string;
  usage: string;
}


export interface Question {
  id: number;
  title: string;
  question: string;
  javascript: string;
  solutions: string[];
  methods: Method[];
}


export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'Encontrar o índice de um elemento',
    question: 'Dado um array de números, encontre o índice do número 10. Se não estiver presente, retorne -1.',
    javascript: `const arrNum=[1,5,8,10,25,9,15,88];\n\nconst findTheNumber=(arr,num)=>{\n\t\n};\n\nconsole.log(findTheNumber(arrNum,10)) // resposta 3\nconsole.log(findTheNumber(arrNum,2)) // resposta -1`,
    solutions: [
      `const array = [5, 3, 7, 10, 2];\nconsole.log(meetNumber(array)); // Saída: 3`,
      `const meetNumber = (arr) => {\n  return arr.findIndex(num => num === 10);\n};\nconst array = [5, 3, 7, 10, 2];\nconsole.log(meetNumber(array)); // Saída: 3`,
      `const meetNumber = (arr) => {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === 10) {\n      return i;\n    }\n  }\n  return -1;\n};\nconst array = [5, 3, 7, 10, 2];\nconsole.log(meetNumber(array)); // Saída: 3`
    ],
    methods: [
      {
        name: 'Estrutura de Repetição for',
        description: 'A estrutura de repetição for é uma das formas mais comuns de realizar iterações em JavaScript. Permite executar um bloco de código repetidamente por um número definido de vezes, com base em uma condição específica.',
        syntax: `for (inicialização; condição; incremento) {\n  // Código a ser executado\n}`,
        usage: 'Quando você sabe o número exato de iterações. Para iterar sobre elementos de um array ou de uma coleção. Quando precisa de controle granular sobre o início, a condição e o incremento da iteração.'
      },
      {
        name: 'Método indexOf',
        description: 'indexOf é um método de array em JavaScript que retorna o primeiro índice no qual um determinado elemento pode ser encontrado no array. Se o elemento não estiver presente, retorna -1.',
        syntax: `array.indexOf(elemento, início)`,
        usage: 'Quando você precisa encontrar a posição de um elemento específico em um array. Para verificar se um elemento existe em um array (se o resultado for -1, o elemento não está presente).'
      },
      {
        name: 'Método findIndex',
        description: 'findIndex é um método de array em JavaScript que retorna o índice do primeiro elemento no array que satisfaz a função de teste fornecida. Se nenhum elemento satisfizer a função de teste, retorna -1.',
        syntax: `array.findIndex(funçãoDeTeste)`,
        usage: 'Quando você precisa encontrar a posição de um elemento baseado em uma condição específica. Para operações mais complexas de busca onde indexOf não é suficiente (por exemplo, encontrar um objeto em um array de objetos com base em uma propriedade).'
      }
    ]
  }
  ];





// export const QUESTIONS: Question[] = [
//   {
//     id: 1,
//     title: 'Encontrar o índice de um elemento',
//     question: 'Dado um array de números, encontre o índice do número 10. Se não estiver presente, retorne -1.',
//     javascript: `const arrNum=[1,5,8,10,25,9,15,88];\n\nconst meetNumber=(arr,num)=>{\n\t\n};\n\nconsole.log(findTheNumber(arrNum,10)) /**resposta 3*/\nconsole.log(findTheNumber(arrNum,2)) /**resposta -1*/`,
//     typescript: `const arrNum:Array<number>= [1,5,8,10,25,9,15,88];\n\nconst findTheNumber = (arr: Array<number>, num: number): number => {\n\t\n}\n\nconsole.log(findTheNumber(arrNum, 10)) /**resposta 3*/\nconsole.log(findTheNumber(arrNum, 2)) /**resposta -1*/` 
//   },
//   {
//     id: 2,
//     title: 'Dobrar os valores',
//     question: 'Dado um array de números, crie um novo array onde cada número seja o dobro do valor original.',
//     javascript: `const arrNum=[1,2,3,4,5];\n\nconst multiplyNumbers=(arr)=>{\n\t\n};\n\nconsole.log(multiplyNumbers(arrNum))/**resposta [2,4,6,8,10]*/`,
//     typescript: `const arrNum:Array<number>=[1,2,3,4,5];\n\nconst multiplyNumbers=(arr:number[]):number[]=>{\n\t\n};\n\nconsole.log(multiplyNumbers(arrNum))/**resposta [2,4,6,8,10]*/`

//   },
//   {
//     id: 3,
//     title: 'Extrair substring',
//     question: 'Dada uma string, retorne uma substring que começa no índice 2 e termina no índice 5',
//     javascript: `const str='substring';\n\nconst extractSubstring=(str,numIni,numEnd)=>{\n\t\n};\n\nconsole.log(extractSubstring(str,2,5))/**resposta bst*/`,
//     typescript: `const str:string='substring';\n\nconst extractSubstring=(str:string,numIni:number,numEnd:number):string=>{\n\t\n};\n\nconsole.log(extractSubstring(str,2,5))/**resposta bst*/`

//   },
//   {
//     id: 4,
//     title: 'Somar valores',
//     question: 'Dado um array de números, use reduce para somar todos os valores do array.',
//     javascript: `const arrNum=[2,4,6,8,10];\n\nconst sumReduce=(arr)=>{\n\t\n};\n\nconsole.log(sumReduce(arrNum)); /**resposta 30 */` ,
//     typescript: `const arrNum:Array<number>=[2,4,6,8,10];\n\nconst sumReduce=(arr:number[]):number=>{\n\t\n};\n\nconsole.log(sumReduce(arrNum)) /**resposta 30*/ `
//   },
//   {
//     id: 5,
//     title: 'Aplicar função a cada elemento',
//     question: 'Dado um array de números, use forEach para imprimir cada número no console.',
//     javascript: `const arrNum=[10,25,18,26,99];\n\nconst printNum=(arr)=>{\n\t\n};\n\nprintNum(arrNum); /**resposta 30 10 25 18 26 99*/`,
//     typescript: `const arrNum:Array<number>=[10,25,18,26,99];\n\nconst printNum=(arr:number[]):void=>{\n\t\n};\n\nprintNum(arrNum); /**30 10 25 18 26 99*/`

//   },
//   {
//     id: 6,
//     title: 'Filtrar itens',
//     question: 'Dado um string, crie um array contendo apenas as palavras que têm mais de 3 letras.',
//     javascript: `const str='Dado um string, crie um array contendo apenas as palavras que têm mais de 3 letras.';\n\nconst wordsMoreThan=(str)=>{\n\t\n};\n\nconsole.log(wordsMoreThan(str)); /**resposta ["Dado", "string,", "crie", "array", "contendo", "apenas", "palavras", "letras."]*/`,
//     typescript: `const str:string='Dado um string, crie um array contendo apenas as palavras que têm mais de 3 letras.';\n\nconst wordsMoreThan=(str:string):string[]=>{\n\t\n};\n\nconsole.log(wordsMoreThan(str)); /**resposta["Dado", "string,", "crie", "array", "contendo", "apenas", "palavras", "letras."]*/`

//   },
//   {
//     id: 7,
//     title: 'Encontrar o maior número',
//     question: 'Dado um array de números, use loop para encontrar o maior número.',
//     javascript: `const arrNum=[10,2,5,8,99,45,20,105,44];\n\nconst higherNum=(arr)=>{\n\t\n};\n\nconsole.log(higherNum(arrNum));/**resposta 105*/`,
//     typescript: `const arrNum:Array<number>=[10,2,5,8,99,45,20,105,44];\n\nconst higherNum=(arr:number[]):number=>{\n\t\n};\n\nconsole.log(higherNum(arrNum));/**resposta 105*/`
//   },
//   // {
//   //   id: 8,
//   //   title: 'Concatenar strings',
//   //   question: 'Dado um array de strings, use reduce para concatenar todas as strings em uma única string.'
//   // },
//   // {
//   //   id: 9,
//   //   title: 'Remover duplicatas',
//   //   question: 'Dado um array de números, retorne um novo array sem elementos duplicados.'
//   // },
//   // {
//   //   id: 10,
//   //   title: 'Transformar matriz de objetos',
//   //   question: 'Dado um array de objetos onde cada objeto tem uma propriedade name e age, crie um novo array que contenha apenas os nomes das pessoas.'
//   // },
//   // {
//   //   id: 11,
//   //   title: 'Classificar números',
//   //   question: 'Dado um array de números, ordene-os em ordem crescente.'
//   // },
//   // {
//   //   id: 12,
//   //   title: 'Inverter uma string',
//   //   question: 'Dada uma string, retorne uma nova string com os caracteres na ordem inversa.'
//   // },
//   // {
//   //   id: 13,
//   //   title: 'Verificar palíndromo',
//   //   question: 'Crie uma função que verifica se uma string é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente).'
//   // },
//   // {
//   //   id: 14,
//   //   title: 'Calcular fatorial',
//   //   question: 'Crie uma função que calcula o fatorial de um número inteiro não negativo.'
//   // },
//   // {
//   //   id: 15,
//   //   title: 'Somar matrizes',
//   //   question: 'Dadas duas matrizes de mesmo tamanho, crie uma função para somar os elementos correspondentes das duas matrizes e retornar uma nova matriz resultante.'
//   // },
//   // {
//   //   id: 16,
//   //   title: 'Encontre números primos',
//   //   question: 'Crie uma função que retorna todos os números primos até um número dado.'
//   // },
//   // {
//   //   id: 17,
//   //   title: 'Verificar se é número',
//   //   question: 'Crie uma função que verifica se um dado valor é um número.'
//   // },
//   // {
//   //   id: 18,
//   //   title: 'Gerar números aleatórios',
//   //   question: 'Crie uma função que gere um número inteiro aleatório entre dois valores dados.'
//   // },
//   // {
//   //   id: 19,
//   //   title: 'Encontre o valor mínimo',
//   //   question: 'Dado um array de números, crie uma função que retorna o valor mínimo.'
//   // },
//   // {
//   //   id: 20,
//   //   title: 'Converter para maiúsculas',
//   //   question: 'Dado um array de strings, crie uma função que retorna um novo array com todas as strings convertidas para letras maiúsculas.'
//   // },
//   // {
//   //   id: 21,
//   //   title: 'Contar ocorrências',
//   //   question: 'Dado um array de números, crie uma função que conte quantas vezes cada número aparece no array e retorne um objeto com os números como chaves e as contagens como valores.'
//   // },
//   // {
//   //   id: 22,
//   //   title: 'Removedor de valores falsos',
//   //   question: 'Dado um array, crie uma função que remova todos os valores falsy (false, null, 0, "", undefined, NaN) do array.'
//   // },
//   // {
//   //   id: 23,
//   //   title: 'Encontrar a média',
//   //   question: 'Dado um array de números, crie uma função que retorne a média dos números.'
//   // },
//   // {
//   //   id: 24,
//   //   title: 'Agrupar por propriedade',
//   //   question: 'Dado um array de objetos, crie uma função que agrupe os objetos por uma propriedade específica e retorne um objeto onde as chaves são os valores dessa propriedade e os valores são arrays de objetos que têm essa propriedade.'
//   // },
//   // {
//   //   id: 25,
//   //   title: 'Misture matrizes',
//   //   question: 'Dado dois arrays de números ordenados, crie uma função que mescle os dois arrays em um único array ordenado.'
//   // },
//   // {
//   //   id: 26,
//   //   title: 'Objeto de transformação',
//   //   question: 'Dado um objeto, crie uma função que inverta as chaves e valores desse objeto. (Assuma que todos os valores do objeto são strings únicas).'
//   // },
//   // {
//   //   id: 27,
//   //   title: 'Contar vogais',
//   //   question: 'Dada uma string, crie uma função que conte o número de vogais na string.'
//   // },
//   // {
//   //   id: 28,
//   //   title: 'Matriz de pares',
//   //   question: 'Dado um array de números, crie uma função que retorne um novo array contendo apenas os números pares.'
//   // },
//   // {
//   //   id: 29,
//   //   title: 'Verificar anagramas',
//   //   question: 'Crie uma função que verifique se duas strings são anagramas uma da outra.'
//   // },
//   // {
//   //   id: 30,
//   //   title: 'Multiplicar matriz',
//   //   question: 'Dadas duas matrizes, crie uma função que retorne o produto matricial das duas matrizes. (Assuma que as matrizes têm tamanhos compatíveis para multiplicação).'
//   // }
// ];