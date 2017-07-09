let obj = {key1 : 1, key2 : 2};
obj.key3 = 3;

let arr = ['value1', 'value2', 'value3'];
arr.push('value4');
console.log(JSON.stringify(arr));

let text = '{"key1" : 1, "key2" : 2}';
// key는 큰따옴표로 묶여 있는 형태여야 파싱이 가능

let parsedObj = JSON.parse(text);
// text to JSON

parsedObj.key3 = 3;
text = JSON.stringify(parsedObj);
// JSON to text

console.log(text);
