
//const myElements = myForm.elements;
//const myInput = myElements["text-input"];
const myForm = document.forms["form"];
const myInput = document.getElementById("text-input");
const myCheck = document.getElementById("check-btn");
const answer = document.getElementById("result");
myCheck.addEventListener("click", checker)
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

function replaceiInnerHTML(element, value) {
    // replace the inner html on the element with some string value
    element.innerHTML = value;
}

function splitAndReverseWord(word) {
    //split string and reverse it
    return word.split('').reverse().join('');
}
function removeAllCharacters(word, character) {
    //remove all of a specific character from the string
    return word.replaceAll(character, '');
}
function cleanWord(word) {
    //clean the word
    let parameters = " _,.()-:/\\|".split("");
    let cleanword = word.toLowerCase();
    for (const character of parameters) {
        cleanword = removeAllCharacters(cleanword, character);
    }
    return cleanword;
}

function isPalindrome(word) {
    // compare reverse with input
    let cleanword = cleanWord(word);
    let reverse = splitAndReverseWord(cleanword);
    console.log(reverse);
    if (reverse == cleanword) {
        replaceiInnerHTML(answer, `${word} is a palindrome`)
    } else {
        replaceiInnerHTML(answer, `${word} is not a palindrome`)
    }
};

function checker(e) {
    if (myInput.value == "" || myInput.value == null) {
        alert("Please input a value");
        return false;
    } else {
        isPalindrome(myInput.value)
    }
};

