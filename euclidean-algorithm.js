// finds the greatest common divisor between 2 integers

const gcd = (num1, num2) => {
    let r = num1 % num2;
    if (r !== 0) {
        return gcd(num2, r);
    }

    else {
        return num2;
    }
}

console.log(gcd(1785, 546));