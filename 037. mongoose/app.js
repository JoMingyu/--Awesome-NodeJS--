// Node.js와 케미가 잘 맞는 DB인 MongoDB
// 그리고 그걸 컨트롤하는 모듈 mongoose
// npm install mongoose
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/mongoose_test');

// 기본적으로 mongodb는 schema free하지만 mongoose를 통해 제약을 걸어줄 수 있다
const Schema = mongoose.Schema;
const postSchema = Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: false },
    create_date: { type: Date, default: Date.now }
}, {
        // 굳이 컬렉션 이름을 임의로 정의할 수 있는데, 컬렉션을 임의로 지정하지 않으면
        // 컬렉션 네임이 모두 lowercase로 바뀌고 복수적 형태로 변환된다.
        collection: 'Post'
    });

// 스키마를 정의해주기 때문에 우리가 해야 하는 일은 model을 얻어오는 일이다
const Post = mongoose.model('Post', postSchema);

// 이 model을 얻어오고 나면, 이를 통해 데이터베이스에 데이터를 저장할 수 있다
const post = new Post({
    title: 'hello',
    content: 'Im so tired',
    author: 'PlanB'
});

// CRUD 중 C
post.save((err, post) => {
    if (err) {
        return console.error(err);
    } else {
        console.log(post);
    }
});

// CRUD 중 R
Post.find((err, posts) => {
    // find의 결과가 array 안에 객체로 담긴다
    if (err) {
        return console.error(err);
    } else {
        console.log(posts);
    }
});
