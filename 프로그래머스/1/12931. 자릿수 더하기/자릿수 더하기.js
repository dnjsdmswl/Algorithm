function solution(n)
{
    var answer = 0;
    const x = String(n);
    for(let i = 0; i < x.length; i++) {
        answer += parseInt(x[i])
    }

    return answer;
}