const request = require("supertest");
const app = require('../app');


let id;
let token;


test('Post/users', async()=>{
    const body = {
        firstName: "santiago",
        lastName: "garrido",
        email: "maden@getMaxListeners2.com",
        password: "santiago03",
        phone: "12212"
    }
    const res = await request(app).post('/users').send(body);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(body.firstName);
    expect(res.body.id).toBeDefined();
})

test('post/users/login', async() =>{
    const body = {
        email:"maden@getMaxListeners2.com",
    password:"santiago03",
    }
    const res = await request(app)
    .post('/users/login')
    .send(body);
    token = res.body.token;
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
})
test('Get/users', async() =>{
        const res = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    })
test('Put/users/id', async() =>{
        const body = {firstName: "santiago update"}
        const res = await request(app)
        .put(`/users/${id}`)
        .send(body)
        .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(res.body.firstName).toBe(body.firstName);
        
})

test('post/users/login debe retornar incorrectas', async () =>{
    const body = {
        email: "adolfo@gmail03.com",
    password:"gabriel03"
    }
    
    const res = await request(app)
    .post('/users/login')
    .send(body)
   
    expect(res.status).toBe(401)
})
test('Delete/users/id', async() =>{
    const res = await request(app)
    .delete(`/users/${id}`)
    .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204);
})

