function solution(money) {
    var answer = [];
    var a = Math.floor(money / 5500);
    answer[0] = a;
    answer[1] = money - (a * 5500);
    return answer;
}