// 타 언어들처럼 break와 continue statement를 가지며, labeling도 가능하다
outer: for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
        if(i === 1 && j === 5) {
            break outer;
        }
        
        if(j % 2) {
            continue;
        }

        console.log(`i = ${i}, j = ${j}`);
    }
}