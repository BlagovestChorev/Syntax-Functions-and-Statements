function checkSameNumbers(inputNumber) {
    const digits = String(inputNumber).split('').map(Number);

    const allSame = digits.every(digit => digit === digits[0]);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);

    console.log(allSame);
    console.log(sum);
}
checkSameNumbers(2222222);