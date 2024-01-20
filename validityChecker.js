function validityChecker(x1, y1, x2, y2) {
    const distance1 = Math.sqrt(x1 ** 2 + y1 ** 2);
    const distance2 = Math.sqrt(x2 ** 2 + y2 ** 2);
    const distance3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    function isValid(distance) {
        return Number.isInteger(distance);
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(distance1) ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(distance2) ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(distance3) ? 'valid' : 'invalid'}`);
}

// Example usage:
validityChecker(3, 0, 0, 4);