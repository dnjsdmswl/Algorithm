function solution(n) {
    var answer = 0;
    for(var a = 1; a <= n; a++) {
        if(n%a === 0) {
            answer += a;
        }
    }
    return answer;
}