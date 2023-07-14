//What in console?

const myPromise = Promise.resolve(Promise.resolve('Promise!'));

function funcOne() {
    myPromise.then(res => res).then(res => console.log('Pr1',res));
    setTimeout(() => console.log('Timeout! 1', 0));
    console.log('Last line! 1');

}

async function funcTwo() {
    const res = await myPromise;
    console.log(await res);
    setTimeout(() => console.log('Timeout! 2', 0));
    console. log('Last line! 2');
}

funcOne();
funcTwo();
    
//last line 1
//Pr1 Promise!
//Promise!
//Last line! 2
//Timeout! 1
//Timeout! 2