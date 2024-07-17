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



