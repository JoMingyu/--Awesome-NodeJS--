const promise = new Promise((resolve, reject) => {
    // Promise의 생산자
    resolve();
});

promise.then(() => {
    // Promise의 소비자(Fulfillment에 대응)
    console.log('Succeed')
}, () => {
    // Promise의 소비자(Reject에 대응)
    console.log('Rejected');
});

function isEven(number) {
    // Promise를 생산하는 함수
    return new Promise((resolve, reject) => {
        if(number % 2 == 0) {
            resolve();
        } else {
            reject();
        }
    });
}

isEven(3).then(() => {
    console.log('Resolved!');
}).catch(() => {
    // Reject 반응에 대한 catch
    console.log('Rejected!');  
});

const promise2 = new Promise((resolve, reject) => {
    resolve(5);
});

promise2
.then((value1) => {
    return value1 + 1;
})
.then((value2) => {
    console.log(value2);
});
