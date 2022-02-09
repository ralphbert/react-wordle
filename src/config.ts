export const chars = [
    [...'qwertzuiop'.split(''), 'del'],
    [...'asdfghjkl'.split(''), 'enter'],
    [...'yxcvbnm'.split('')]
];

export const wordLength = 5;
export const guessCount = 6;

export const arrayWithLength = (length: number) => Array.from(Array(length).keys());
export const encode = (str: string) => str.split('')
    .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('');
export const decode = (hex: string) => hex.split(/(\w\w)/g)
    .filter(p => !!p)
    .map(c => String.fromCharCode(parseInt(c, 16)))
    .join('');
