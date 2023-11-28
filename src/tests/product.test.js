const request = require("supertest");
const app = require("../app");
require('../models');

let token;
let id;

beforeAll(async() =>{
    const user = {
             email: "test@gmail.com",
             password: "santi02",
    }
    
    const res = await request(app).post('/users/login').send(user);
    token = res.body.token
 })

test('Get/products', async() =>{
    const res = await request(app).get('/products')
    console.log(res.body)
    expect(res.status).toBe(200);
   
    expect(res.body).toBeInstanceOf(Array);
    
    
    
});

test('Post/products', async () =>{
    const products = {
        title: "movil",
        description: "xamxung",
     
        brand: "xamxung",
        price: "1000",
    }
    const res = await request(app)
    .post('/products')
    .send(products)
    .set('Authorization', `Bearer ${token}`)
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.title).toBe(products.title);
});

test('Delete/products/:id', async () => {
    const res = await request(app).delete(`/products/${id}`)
    .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204);
})