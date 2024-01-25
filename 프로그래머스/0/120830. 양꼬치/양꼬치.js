function solution(n, k) {
    var answer = 0;
    var a, b, c = 0;
    a = n * 12000;
    b = k * 2000;
    c = Math.floor(n/10) * 2000;
    answer = a + b - c;
    return answer;
}