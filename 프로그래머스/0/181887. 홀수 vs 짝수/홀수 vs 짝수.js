function solution(num_list) {
    var answer = 0;
    var num = 0; 
    var sum = 0; 

    for (var i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            num += num_list[i];
        } else {
            sum += num_list[i];
        }
    }

    if (num < sum) {
        answer = sum;
    } else {
        answer = num;
    }

    return answer;
}