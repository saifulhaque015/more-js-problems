const greetings = 'Hello,how are you?'

function reverseStr(text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        reverse = reverse + letter;
    }
}

const reverseString = reverseStr(greetings);
console.log(reverseString);