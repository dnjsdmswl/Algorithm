function solution(n, t) {
    var answer = 0;
    for(var i = 0;i < t; i++) {
        answer = (n*=2);
    }
    return answer;
}