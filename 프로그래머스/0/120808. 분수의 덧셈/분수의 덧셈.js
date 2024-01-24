function solution(denum1, num1, denum2, num2) {
    let numerator = denum1 * num2 + denum2 * num1;
    let denominator = num1 * num2;

    const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
    const gcd = getGCD(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;

    return [numerator, denominator];
}