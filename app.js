const express = require('express')
const app = express()

// sql 연결
const { sequelize } = require('./models');
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });



app.listen(3000, () => {
    console.log('서버 실행~~')
})