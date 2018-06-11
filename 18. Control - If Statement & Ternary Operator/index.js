// if(cond) {} - else if(cond) {} - else {} 형태로 if statement들을 구성한다
var data = 10;

if(data < 10) {
    console.log('Under than 10');
} else if(data % 2) {
    console.log('Data is odd number');
} else if(data === 50) {
    console.log('Data exactly equals with 50');
} else {
    console.log('Else');
}

// 삼항 연산자는 condition ? expr1 : expr2 형태로 구성한다
var age = 19;

console.log(age > 19 ? 'Can drink alcohol' : 'Can\'t drink alcohol');