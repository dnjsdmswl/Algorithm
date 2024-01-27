function solution(array) {
    var answer = 0;
    var sum = 0;
    array.sort(function(a, b) {
        return a - b;
    });
    sum = Math.floor(array.length / 2);
    for(var i = 0; i < array.length; i++) {
        answer = array[sum];
    }
    return answer;
}