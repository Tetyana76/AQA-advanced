const axios = require("axios");

describe('API Tests', () => {
    let createdObjectId;

    test('Post create New Object', async () => {
        const response = await axios.post('https://api.restful-api.dev/objects',
            {
                "name": "Apple MacBook Pro 18",
                "data": {
                    "year": 2022,
                    "price": 1999.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }, { validateStatus: () => true })
        expect(response.status).toBe(200);
        expect(typeof response.data.name).toBe('string');
        expect(response.data).toHaveProperty('data');
        expect(response.data.data.price).toBe(1999.99);
        createdObjectId = response.data.id;
    });

    test('GET Single object', async () => {
        const response = await axios.get(`https://api.restful-api.dev/objects/${createdObjectId}`, { validateStatus: () => true });
        expect(response.status).toBe(200);
        expect(typeof response.data.name).toBe('string');
        expect(response.data.data.year).toBeDefined();
        expect(response.data.data['CPU model']).toBeDefined();
        expect(response.data.data['Hard disk size']).toBeDefined();
    });

    test('Patch change partially object', async () => {
        const response = await axios.patch(`https://api.restful-api.dev/objects/${createdObjectId}`,
            {
                "name": "Apple MacBook Air",
                "data": {
                    "price": 3000.00
                }
            }, { validateStatus: () => true })
        expect(response.status).toBe(200);
        expect(response.data.name).toBe("Apple MacBook Air");
        expect(response.data).toHaveProperty('data');
        expect(response.data.data.price).toBe(3000.00);
    });

    test('DELETE delete Object', async () => {
        const response = await axios.delete(`https://api.restful-api.dev/objects/${createdObjectId}`, { validateStatus: () => true });
        expect(response.status).toBe(200);
        expect(response.data.message).toMatch(`Object with id = ${createdObjectId} has been deleted.`);
    });

    test('Negative - GET deleted object', async () => {
        const response = await axios.get(`https://api.restful-api.dev/objects/${createdObjectId}`, { validateStatus: () => true });
        expect(response.status).toBe(404);
        expect(response.data.error).toMatch(`Oject with id=${createdObjectId} was not found.`);
    });

})