const keyboard = {
    0: [' '],
    1: [''],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

/**
 * Takes number as an input and converts it to array of all possible strings response as of T9 on mobile phone
 *
 * @param inputNumber
 * @returns {string[]}
 */
export function convertNumberToWords(inputNumber) {

    if (!inputNumber) {
        return [];
    }

    let inputString = String(inputNumber);
    let result = [""];
    let partialResult = [];

    for (let i = 0; i < inputString.length; i++) {
        let currentLetters = keyboard[inputString[i]];
        for (let j = 0; j < result.length; j++) {
            let currentCombination = result[j];
            for (let k = 0; k < currentLetters.length; k++) {
                partialResult.push(currentCombination + currentLetters[k]);
            }
        }

        result = partialResult;
        partialResult = [];
    }

    return result;
}

