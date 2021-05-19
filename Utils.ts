interface IHaveALength {
    length: number;
}
export function clone<T>(value: T): T {
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}
export function totalLength<T extends IHaveALength>(x: T, y: T) {
    var total: number = x.length + y.length;
    return total;
}

clone('Hello');
clone(123);
clone({ name: 'Jess' });

var length = totalLength('Jess', 'Chadwick');
