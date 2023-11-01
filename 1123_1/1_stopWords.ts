//Text is entered into the field, when you click the button, it is checked;
//if there are phrases in the text from the list, you need to display all found stop phrases.

function findBadWords(text: string, badWords: string[]): string[] {
    const lowText: string = text.toLowerCase()
    const result: string[] = []

    badWords.forEach((word) => {
        if (lowText.includes(word.toLowerCase())) { result.push(word) }
    })

    return result
}

// Пример использования функции
const inputText = "Я потерялся и нуждаюсь в добрых руках. Пожалуйста, помогите!";
const badWords = ["Красный", "Срочно", "Пристроим", "Потерялся", "Добрые руки", "Стоимость"];

const foundPhrases = findBadWords(inputText, badWords);

console.log(foundPhrases);
// Output: ["Потерялся", "Добрые руки"]