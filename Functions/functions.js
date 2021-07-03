function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

const calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b,
}

const isAlpha = str => /^[a-zA-Z]*$/.test(str);

function cipher(string, shift) {
    let encrypted = '';
    for (let i = 0; i < string.length; i++) {
        if (isAlpha(string[i])) {
            let ascii = string.charCodeAt(i) + shift;
            if (ascii > 122) {
                ascii -= 26
            }
            encrypted += String.fromCharCode(ascii);
        }
        else encrypted += string[i];
    }
    return encrypted;
}

function analyze(array) {
    return {
        average: array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length,
        min : Math.min(...array),
        max : Math.max(...array),
        length: array.length,
    }
}

export { capitalize, reverseString, calculator, cipher, analyze };

