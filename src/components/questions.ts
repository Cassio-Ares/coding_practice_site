export interface Method {
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
    title: "Encontrar o índice de um elemento",
    question:
      "Dado um array de números, encontre o índice do número 10. Se não estiver presente, retorne -1.",
    javascript: `const arrNum=[1,5,8,10,25,9,15,88];\n\nconst findTheNumber=(arr,num)=>{\n\t\n};\n\nconsole.log(findTheNumber(arrNum,10)) // resposta 3\nconsole.log(findTheNumber(arrNum,2)) // resposta -1`,
    solutions: [
      `const array = [5, 3, 7, 10, 2];\nconsole.log(meetNumber(array)); // Saída: 3`,
      `const meetNumber = (arr) => {\n  return arr.findIndex(num => num === 10);\n};\nconst array = [5, 3, 7, 10, 2];\nconsole.log(meetNumber(array)); // Saída: 3`,
      `const meetNumber = (arr) => {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === 10) {\n      return i;\n    }\n  }\n  return -1;\n};\nconst array = [5, 3, 7, 10, 2];\nconsole.log(meetNumber(array)); // Saída: 3`,
    ],
    methods: [
      {
        name: "Estrutura de Repetição for",
        description:
          "A estrutura de repetição for é uma das formas mais comuns de realizar iterações em JavaScript. Permite executar um bloco de código repetidamente por um número definido de vezes, com base em uma condição específica.",
        syntax: `for (inicialização; condição; incremento) {\n  // Código a ser executado\n}`,
        usage:
          "Quando você sabe o número exato de iterações. Para iterar sobre elementos de um array ou de uma coleção. Quando precisa de controle granular sobre o início, a condição e o incremento da iteração.",
      },
      {
        name: "Método indexOf",
        description:
          "indexOf é um método de array em JavaScript que retorna o primeiro índice no qual um determinado elemento pode ser encontrado no array. Se o elemento não estiver presente, retorna -1.",
        syntax: `array.indexOf(elemento, início)`,
        usage:
          "Quando você precisa encontrar a posição de um elemento específico em um array. Para verificar se um elemento existe em um array (se o resultado for -1, o elemento não está presente).",
      },
      {
        name: "Método findIndex",
        description:
          "findIndex é um método de array em JavaScript que retorna o índice do primeiro elemento no array que satisfaz a função de teste fornecida. Se nenhum elemento satisfizer a função de teste, retorna -1.",
        syntax: `array.findIndex(funçãoDeTeste)`,
        usage:
          "Quando você precisa encontrar a posição de um elemento baseado em uma condição específica. Para operações mais complexas de busca onde indexOf não é suficiente (por exemplo, encontrar um objeto em um array de objetos com base em uma propriedade).",
      },
    ],
  },
  {
    id: 2,
    title: "Calcular a soma dos números",
    question: "Dado um array de números, calcule a soma de todos os elementos.",
    javascript: `const arrNum=[1,2,3,4,5];\n\nconst sumArray=(arr)=>{\n\t\n};\n\nconsole.log(sumArray(arrNum)) // resposta 15`,
    solutions: [
      `const sumArray1 = (arr) => {\n  return arr.reduce((acc, num) => acc + num, 0);\n};\nconst arrNum = [1, 2, 3, 4, 5];\nconsole.log(sumArray1(arrNum)); // Saída: 15`,
      `const sumArray2 = (arr) => {\n  let sum = 0;\n  for (let i = 0; i < arr.length; i++) {\n    sum += arr[i];\n  }\n  return sum;\n};\nconst arrNum = [1, 2, 3, 4, 5];\nconsole.log(sumArray2(arrNum)); // Saída: 15`,
      `const sumArray3 = (arr) => {\n  let sum = 0;\n  for (const num of arr) {\n    sum += num;\n  }\n  return sum;\n};\nconst arrNum = [1, 2, 3, 4, 5];\nconsole.log(sumArray3(arrNum)); // Saída: 15`,
    ],
    methods: [
      {
        name: "Método reduce",
        description:
          "O método reduce executa uma função redutora sobre cada elemento do array, resultando em um único valor de retorno.",
        syntax: `array.reduce(funçãoRedutora, valorInicial)`,
        usage:
          "Quando você precisa computar um único valor a partir dos elementos de um array. Para operações que requerem acumulação de valores, como somar todos os elementos de um array.",
      },
      {
        name: "Estrutura de Repetição for",
        description:
          "A estrutura de repetição for é uma das formas mais comuns de realizar iterações em JavaScript. Permite executar um bloco de código repetidamente por um número definido de vezes, com base em uma condição específica.",
        syntax: `for (inicialização; condição; incremento) {\n  // Código a ser executado\n}`,
        usage:
          "Quando você sabe o número exato de iterações. Para iterar sobre elementos de um array ou de uma coleção. Quando precisa de controle granular sobre o início, a condição e o incremento da iteração.",
      },
      {
        name: "Estrutura de Repetição for...of",
        description:
          "A estrutura for...of itera sobre elementos iteráveis (como arrays, strings, Map, Set, etc.), retornando uma referência para cada iteração.",
        syntax: `for (variável of iterável) {\n  // Código a ser executado\n}`,
        usage:
          "Quando você precisa iterar sobre os elementos de um objeto iterável de forma simples e direta. É útil quando você precisa de acesso direto aos valores dos elementos do iterável, sem se preocupar com índices ou outros detalhes de implementação.",
      },
    ],
  },
  {
    id: 3,
    title: "Reverter uma string",
    question:
      "Dada uma string, retorne uma nova string que seja a inversão da original.",
    javascript: `const str='hello';\n\nconst reverseString=(str)=>{\n\t\n};\n\nconsole.log(reverseString(str)) // resposta 'olleh'`,
    solutions: [
      `const reverseString1 = (str) => {\n  return str.split('').reverse().join('');\n};\nconst str = 'hello';\nconsole.log(reverseString1(str)); // Saída: 'olleh'`,
      `const reverseString2 = (str) => {\n  let reversed = '';\n  for (let i = str.length - 1; i >= 0; i--) {\n    reversed += str[i];\n  }\n  return reversed;\n};\nconst str = 'hello';\nconsole.log(reverseString2(str)); // Saída: 'olleh'`,
      `const reverseString3 = (str) => {\n  return [...str].reduce((acc, char) => char + acc, '');\n};\nconst str = 'hello';\nconsole.log(reverseString3(str)); // Saída: 'olleh'`,
    ],
    methods: [
      {
        name: "Método split",
        description:
          "O método split divide uma string em um array de substrings, e retorna o novo array.",
        syntax: `string.split(separador, limite)`,
        usage:
          "Quando você precisa dividir uma string em partes menores, geralmente usando um separador. Para converter uma string em um array de substrings com base em um delimitador.",
      },
      {
        name: "Método reverse",
        description:
          "O método reverse inverte a ordem dos elementos de um array no local. O primeiro elemento do array se torna o último, e o último se torna o primeiro.",
        syntax: `array.reverse()`,
        usage:
          "Quando você precisa inverter a ordem dos elementos de um array. Para obter a reversão de um array de forma direta e simples.",
      },
      {
        name: "Método join",
        description:
          "O método join junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.",
        syntax: `array.join(separador)`,
        usage:
          "Quando você precisa concatenar os elementos de um array em uma única string, usando um separador especificado.",
      },
      {
        name: "Estrutura de Repetição for",
        description:
          "A estrutura de repetição for é uma das formas mais comuns de realizar iterações em JavaScript. Permite executar um bloco de código repetidamente por um número definido de vezes, com base em uma condição específica.",
        syntax: `for (inicialização; condição; incremento) {\n  // Código a ser executado\n}`,
        usage:
          "Quando você sabe o número exato de iterações. Para iterar sobre elementos de um array ou de uma coleção. Quando precisa de controle granular sobre o início, a condição e o incremento da iteração.",
      },
      {
        name: "Método reduce",
        description:
          "O método reduce executa uma função redutora sobre cada elemento do array, resultando em um único valor de retorno.",
        syntax: `array.reduce(funçãoRedutora, valorInicial)`,
        usage:
          "Quando você precisa computar um único valor a partir dos elementos de um array. Para operações que requerem acumulação de valores, como somar todos os elementos de um array.",
      },
    ],
  },
  {
    id: 4,
    title: "Verificar número primo",
    question: "Dado um número, verifique se ele é primo.",
    javascript: `const num=17;\n\nconst isPrime=(num)=>{\n\t\n};\n\nconsole.log(isPrime(num)) // resposta true\nconsole.log(isPrime(18)) // resposta false`,
    solutions: [
      `const isPrime1 = (num) => {\n  if (num <= 1) return false;\n  for (let i = 2; i < num; i++) {\n    if (num % i === 0) return false;\n  }\n  return true;\n};\nconsole.log(isPrime1(17)); // Saída: true\nconsole.log(isPrime1(18)); // Saída: false`,
      `const isPrime2 = (num) => {\n  if (num <= 1) return false;\n  for (let i = 2; i <= Math.sqrt(num); i++) {\n    if (num % i === 0) return false;\n  }\n  return true;\n};\nconsole.log(isPrime2(17)); // Saída: true\nconsole.log(isPrime2(18)); // Saída: false`,
      `const isPrime3 = (num) => {\n  if (num <= 1) return false;\n  let divisor = 2;\n  while (divisor < num) {\n    if (num % divisor === 0) return false;\n    divisor++;\n  }\n  return true;\n};\nconsole.log(isPrime3(17)); // Saída: true\nconsole.log(isPrime3(18)); // Saída: false`,
    ],
    methods: [
      {
        name: "Estrutura de Repetição for",
        description:
          "A estrutura de repetição for é uma das formas mais comuns de realizar iterações em JavaScript. Permite executar um bloco de código repetidamente por um número definido de vezes, com base em uma condição específica.",
        syntax: `for (inicialização; condição; incremento) {\n  // Código a ser executado\n}`,
        usage:
          "Quando você sabe o número exato de iterações. Para iterar sobre elementos de um array ou de uma coleção. Quando precisa de controle granular sobre o início, a condição e o incremento da iteração.",
      },
      {
        name: "Estrutura de Repetição while",
        description:
          "A estrutura de repetição while executa um bloco de código enquanto a condição especificada é verdadeira.",
        syntax: `while (condição) {\n  // Código a ser executado\n}`,
        usage:
          "Quando você precisa repetir uma operação indefinidamente, até que uma condição específica seja atendida. Para laços de repetição onde o número de iterações não é conhecido de antemão.",
      },
      {
        name: "Método Math.sqrt",
        description: "O método Math.sqrt retorna a raiz quadrada de um número.",
        syntax: `Math.sqrt(x)`,
        usage:
          "Quando você precisa calcular a raiz quadrada de um número. É útil para otimizar algoritmos que requerem verificar fatores até a raiz quadrada de um número.",
      },
    ],
  },
  {
    id: 5,
    title: "Remover duplicatas de um array",
    question: "Dado um array de números, remova todos os valores duplicados.",
    javascript: `const arrNum=[1,2,3,4,4,5,5,6];\n\nconst removeDuplicates=(arr)=>{\n\t\n};\n\nconsole.log(removeDuplicates(arrNum)) // resposta [1,2,3,4,5,6]`,
    solutions: [
      `const removeDuplicates1 = (arr) => {\n  return [...new Set(arr)];\n};\nconst arrNum = [1, 2, 3, 4, 4, 5, 5, 6];\nconsole.log(removeDuplicates1(arrNum)); // Saída: [1, 2, 3, 4, 5, 6]`,
      `const removeDuplicates2 = (arr) => {\n  return arr.filter((item, index) => arr.indexOf(item) === index);\n};\nconst arrNum = [1, 2, 3, 4, 4, 5, 5, 6];\nconsole.log(removeDuplicates2(arrNum)); // Saída: [1, 2, 3, 4, 5, 6]`,
      `const removeDuplicates3 = (arr) => {\n  const result = [];\n  const map = {};\n  for (const item of arr) {\n    if (!map[item]) {\n      map[item] = true;\n      result.push(item);\n    }\n  }\n  return result;\n};\nconst arrNum = [1, 2, 3, 4, 4, 5, 5, 6];\nconsole.log(removeDuplicates3(arrNum)); // Saída: [1, 2, 3, 4, 5, 6]`,
    ],
    methods: [
      {
        name: "Objeto Set",
        description:
          "Set é uma coleção de valores que são únicos. Um valor no Set pode ocorrer apenas uma vez; ele é único no Set's coleção.",
        syntax: `new Set([iterável])`,
        usage:
          "Quando você precisa garantir que todos os valores em uma coleção sejam únicos. Para remover duplicatas de um array de maneira eficiente.",
      },
      {
        name: "Método filter",
        description:
          "O método filter cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.",
        syntax: `array.filter(funçãoDeTeste, thisArg)`,
        usage:
          "Quando você precisa criar um novo array com elementos que atendam a uma condição específica. Para filtrar elementos de um array com base em uma função de teste.",
      },
      {
        name: "Estrutura de Repetição for...of",
        description:
          "A estrutura for...of itera sobre elementos iteráveis (como arrays, strings, Map, Set, etc.), retornando uma referência para cada iteração.",
        syntax: `for (variável of iterável) {\n  // Código a ser executado\n}`,
        usage:
          "Quando você precisa iterar sobre os elementos de um objeto iterável de forma simples e direta. É útil quando você precisa de acesso direto aos valores dos elementos do iterável, sem se preocupar com índices ou outros detalhes de implementação.",
      },
    ],
  },
  {
    id: 6,
    title: "Verificar um anagrama",
    question:
      "Dadas duas strings, verifique se elas são anagramas uma da outra.",
    javascript: `const str1="listen";\nconst str2="silent";\n\nconst isAnagram=(str1,str2)=>{\n\t\n};\n\nconsole.log(isAnagram(str1,str2)) // resposta true\nconsole.log(isAnagram("hello","world")) // resposta false`,
    solutions: [
      `const isAnagram1 = (str1, str2) => {\n  const normalize = (str) => str.toLowerCase().split('').sort().join('');\n  return normalize(str1) === normalize(str2);\n};\nconsole.log(isAnagram1("listen", "silent")); // Saída: true\nconsole.log(isAnagram1("hello", "world")); // Saída: false`,
      `const isAnagram2 = (str1, str2) => {\n  if (str1.length !== str2.length) return false;\n  const charCount = (str) => {\n    return str.split('').reduce((count, char) => {\n      count[char] = (count[char] || 0) + 1;\n      return count;\n    }, {});\n  };\n  const count1 = charCount(str1);\n  const count2 = charCount(str2);\n  for (let char in count1) {\n    if (count1[char] !== count2[char]) return false;\n  }\n  return true;\n};\nconsole.log(isAnagram2("listen", "silent")); // Saída: true\nconsole.log(isAnagram2("hello", "world")); // Saída: false`,
    ],
    methods: [
      {
        name: "Método split",
        description:
          "O método split divide uma string em um array de substrings, com base em um delimitador especificado.",
        syntax: `string.split(delimitador)`,
        usage:
          "Quando você precisa dividir uma string em partes menores, como palavras ou caracteres individuais.",
      },
      {
        name: "Método sort",
        description:
          "O método sort ordena os elementos de um array e retorna o array ordenado.",
        syntax: `array.sort([funçãoDeComparação])`,
        usage:
          "Quando você precisa ordenar os elementos de um array, como ordenar caracteres em ordem alfabética.",
      },
      {
        name: "Método join",
        description:
          "O método join une todos os elementos de um array em uma string, com um delimitador especificado entre cada elemento.",
        syntax: `array.join(delimitador)`,
        usage:
          "Quando você precisa concatenar os elementos de um array em uma string, com um separador específico entre os elementos.",
      },
      {
        name: "Método reduce",
        description:
          "O método reduce executa uma função redutora sobre cada elemento do array, resultando em um único valor de retorno.",
        syntax: `array.reduce(funçãoRedutora, valorInicial)`,
        usage:
          "Quando você precisa computar um único valor a partir dos elementos de um array. Para operações que requerem acumulação de valores, como somar todos os elementos de um array.",
      },
    ],
  },
  {
    id: 7,
    title: "Encontrar o maior número em um array",
    question: "Dado um array de números, retorne o maior número.",
    javascript: `const arrNum=[1,2,3,4,5,6];\n\nconst findMax=(arr)=>{\n\t\n};\n\nconsole.log(findMax(arrNum)) // resposta 6`,
    solutions: [
      `const findMax1 = (arr) => {\n  return Math.max(...arr);\n};\nconst arrNum = [1, 2, 3, 4, 5, 6];\nconsole.log(findMax1(arrNum)); // Saída: 6`,
      `const findMax2 = (arr) => {\n  return arr.reduce((max, num) => (num > max ? num : max), arr[0]);\n};\nconst arrNum = [1, 2, 3, 4, 5, 6];\nconsole.log(findMax2(arrNum)); // Saída: 6`,
      `const findMax3 = (arr) => {\n  let max = arr[0];\n  for (let num of arr) {\n    if (num > max) {\n      max = num;\n    }\n  }\n  return max;\n};\nconst arrNum = [1, 2, 3, 4, 5, 6];\nconsole.log(findMax3(arrNum)); // Saída: 6`,
    ],
    methods: [
      {
        name: "Método Math.max",
        description:
          "O método Math.max retorna o maior de zero ou mais números.",
        syntax: `Math.max([valor1[, valor2[, ...[, valorN]]]])`,
        usage:
          "Quando você precisa encontrar o maior número em uma lista de valores.",
      },
      {
        name: "Operador de espalhamento (spread)",
        description:
          "O operador de espalhamento permite expandir um iterável (como uma array) em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) são esperados.",
        syntax: `[...iterável]`,
        usage:
          "Quando você precisa expandir os elementos de um iterável em um novo contexto, como passar elementos de um array como argumentos individuais para uma função.",
      },
      {
        name: "Método reduce",
        description:
          "O método reduce executa uma função redutora sobre cada elemento do array, resultando em um único valor de retorno.",
        syntax: `array.reduce(funçãoRedutora, valorInicial)`,
        usage:
          "Quando você precisa computar um único valor a partir dos elementos de um array. Para operações que requerem acumulação de valores, como somar todos os elementos de um array.",
      },
      {
        name: "Estrutura de Repetição for...of",
        description:
          "A estrutura for...of itera sobre elementos iteráveis (como arrays, strings, Map, Set, etc.), retornando uma referência para cada iteração.",
        syntax: `for (variável of iterável) {\n  // Código a ser executado\n}`,
        usage:
          "Quando você precisa iterar sobre os elementos de um objeto iterável de forma simples e direta. É útil quando você precisa de acesso direto aos valores dos elementos do iterável, sem se preocupar com índices ou outros detalhes de implementação.",
      },
    ],
  },
  {
    id: 8,
    title: "Encontrar o segundo maior número em um array",
    question: "Dado um array de números, retorne o segundo maior número.",
    javascript: `const arrNum=[1,2,3,4,5,6];\n\nconst findSecondMax=(arr)=>{\n\t\n};\n\nconsole.log(findSecondMax(arrNum)) // resposta 5`,
    solutions: [
      `const findSecondMax1 = (arr) => {\n  const uniqueArr = [...new Set(arr)];\n  uniqueArr.sort((a, b) => b - a);\n  return uniqueArr[1];\n};\nconst arrNum = [1, 2, 3, 4, 5, 6];\nconsole.log(findSecondMax1(arrNum)); // Saída: 5`,
      `const findSecondMax2 = (arr) => {\n  let max = -Infinity, secondMax = -Infinity;\n  for (let num of arr) {\n    if (num > max) {\n      secondMax = max;\n      max = num;\n    } else if (num > secondMax && num < max) {\n      secondMax = num;\n    }\n  }\n  return secondMax;\n};\nconst arrNum = [1, 2, 3, 4, 5, 6];\nconsole.log(findSecondMax2(arrNum)); // Saída: 5`,
      `const findSecondMax3 = (arr) => {\n  let max = Math.max(...arr);\n  arr = arr.filter(num => num !== max);\n  return Math.max(...arr);\n};\nconst arrNum = [1, 2, 3, 4, 5, 6];\nconsole.log(findSecondMax3(arrNum)); // Saída: 5`,
    ],
    methods: [
      {
        name: "Objeto Set",
        description:
          "O objeto Set permite armazenar valores únicos de qualquer tipo, seja valores primitivos ou referências a objetos.",
        syntax: `new Set([iterável])`,
        usage:
          "Quando você precisa garantir que uma coleção de valores contenha apenas valores únicos, sem duplicatas.",
      },
      {
        name: "Método sort",
        description:
          "O método sort ordena os elementos de um array e retorna o array ordenado.",
        syntax: `array.sort([funçãoDeComparação])`,
        usage:
          "Quando você precisa ordenar os elementos de um array, como ordenar caracteres em ordem alfabética.",
      },
      {
        name: "Operador de espalhamento (spread)",
        description:
          "O operador de espalhamento permite expandir um iterável (como uma array) em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) são esperados.",
        syntax: `[...iterável]`,
        usage:
          "Quando você precisa expandir os elementos de um iterável em um novo contexto, como passar elementos de um array como argumentos individuais para uma função.",
      },
      {
        name: "Método filter",
        description:
          "O método filter cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.",
        syntax: `array.filter(funçãoCallback[, thisArg])`,
        usage:
          "Quando você precisa filtrar os elementos de um array com base em uma condição específica.",
      },
      {
        name: "Método Math.max",
        description:
          "O método Math.max retorna o maior de zero ou mais números.",
        syntax: `Math.max([valor1[, valor2[, ...[, valorN]]]])`,
        usage:
          "Quando você precisa encontrar o maior número em uma lista de valores.",
      },
    ],
  },
];
