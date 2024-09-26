function solution(n) {
    const answer = parseInt((n + '').split("").sort((a, b) => (b-a)).join(""));
    return answer;
}