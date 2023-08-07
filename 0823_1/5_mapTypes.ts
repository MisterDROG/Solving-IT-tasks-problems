//add typing for JS map function

const arrN = [1, 5, 6, 3, 9, 7];

function mapN<T, R>(arr: Array<T>, callback: (item: T) => R): Array<R> {
    const arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(callback(arr[i]));
    }
    return arrRes;
}

console.log(mapN(arrN, (n) => n * 2));