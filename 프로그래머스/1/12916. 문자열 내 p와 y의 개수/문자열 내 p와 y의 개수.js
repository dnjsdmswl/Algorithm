function solution(s){
    let count_p = 0;
    let count_y = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'p' || s[i] === 'P') {
            count_p += 1;
        }
        else if(s[i] === 'y' || s[i] === 'Y') {
            count_y += 1;
        }
    }
    if(count_p == count_y) {
        return true;
    }
    else {
        return false;
    }
}