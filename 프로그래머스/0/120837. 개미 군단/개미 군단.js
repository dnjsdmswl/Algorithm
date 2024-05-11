function solution(hp) {

    let a = parseInt(hp/5);
    let b = parseInt((hp-(a*5))/3)
    let c = parseInt((hp-(a*5)-(b*3))/1)

    let d = a+b+c;

    return d
}