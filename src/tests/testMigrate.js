const request = require('supertest');
const sequelize = require('../utils/connection');
const app = require('../app');

const main = async() => {
    try{
        
        const user = {
            email: "test@gmail.com",
            password: "santi02",
            firstName: "juan",
            lastName: "pedro",
            phone: "5858585",
        }
        await request(app).post('/users').send(user);
        sequelize.sync();
        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();