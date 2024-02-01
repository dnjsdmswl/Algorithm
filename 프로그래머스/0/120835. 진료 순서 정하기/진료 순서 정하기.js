function solution(emergency) {
    let order = new Map();
    var sort = [...emergency].sort((a, b) => b - a);
    for (var i = 0; i < sort.length; i++) {
        order.set(sort[i], i + 1);
    }
    return emergency.map(v => order.get(v));
}
