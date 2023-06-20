// Разбить текст на фрагменты.
// Функция принимает на вход текст.
// Задача функции разбить текст на СМСки размером не больше 30 символов и
// вернуть в результате массив получившихся строк.
// Так как СМСки платные важно разбить
// текст на минимальное количество фрагментов.
// Слова нельзя разбивать посередине,
// то есть текст нужно разбить строго по пробелам.

// Пример
const initialStr =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit";
// Результат:
// [
//   'Lorem ipsum dolor sit amet',
//   'consectetur adipiscing elit'
// ]

function divideTextIntoChunks(text) {
    const CHUNK_SIZE = 30,
      words = text.split(" "),
      chunks = [];
  
    let currentChunk = "";
  
    words.forEach((_, i) => {
      const word = words[i];
  
      if (currentChunk.length + word.length >= CHUNK_SIZE) {
        chunks.push(currentChunk.trim());
        currentChunk = "";
      }
      currentChunk += `${word} `;
    });
  
    if (currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
    }
  
    return chunks;
  }

console.log("3 ->", divideTextIntoChunks(initialStr));