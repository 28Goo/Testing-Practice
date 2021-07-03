import { calculator, capitalize, reverseString, cipher, analyze } from './functions';

test('captialize first letter', () => {
    expect(capitalize('hello world')).toBe('Hello world');   
});

test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('add', () => {
    expect(calculator.add(3, 3)).toEqual(6);
});

test('subtract', () => {
    expect(calculator.subtract(5, 3)).toEqual(2);
});

test('multiply', () => {
    expect(calculator.multiply(8, 3)).toEqual(24);
});

test('divide', () => {
    expect(calculator.divide(25, 5)).toEqual(5);
});

test('ceasar cipher', () => {
    expect(cipher('attack at dawn', 11)).toBe('leelnv le olhy');
});

test('analyze array', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
})

