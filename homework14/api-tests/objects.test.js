import Object from '../apiClient/endpoints/objects';
// import { faker } from '@faker-js/faker';
import { simpleFaker } from '@faker-js/faker';
let objectsApi;
let objectId;
let ids = []; 

describe('Objects tests', () => {
  beforeAll(async () => {
    objectsApi = new Object();
  });

  test('Get the list of all objects', async () => {
    const response = await objectsApi.objectsList({ validateStatus: () => true });
    
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.data)).toBe(true);
    
    response.data.forEach(obj => {
      expect(typeof obj.id).toBe('string');
      expect(typeof obj.name).toBe('string');
      expect(typeof obj.data).toBe('object');
      ids.push(obj.id); 
    });

    expect(ids.length).toBeGreaterThan(0);
    console.log('Extracted IDs:', ids);
  });

  test('Get several objects by ids', async () => {
    expect(ids.length).toBeGreaterThan(2);
    const [objectId1, objectId2, objectId3] = ids.sort(() => 0.5 - Math.random()).slice(0, 3);
    const responseByIds = await objectsApi.objectsByIds(objectId1, objectId2, objectId3, { validateStatus: () => true }); 

    expect(responseByIds.status).toEqual(200);
    expect(Array.isArray(responseByIds.data)).toBe(true);
    expect(responseByIds.data.length).toBe(3);
    responseByIds.data.forEach(obj => {
      expect(typeof obj.id).toBe('string');
      expect(typeof obj.name).toBe('string');
      expect(typeof obj.data).toBe('object');
    });
    console.log('Fetched objects by random IDs:', responseByIds.data);
  });

  test('Create New Object successfully', async () => {
    const response = await objectsApi.addObject(
      {
        "name": "Apple MacBook Pro 18",
        "data": {
          "year": 2022,
          "price": 1999.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
        }
      }, { validateStatus: () => true });
      
    expect(response.status).toEqual(200);
    expect(typeof response.data.name).toBe('string');
    expect(response.data).toHaveProperty('data');
    expect(response.data.data.year).toEqual(2022);
    expect(response.data.data.price).toEqual(1999.99);
    expect(response.data.data['CPU model']).toBeDefined();
    expect(response.data.data['Hard disk size']).toBeDefined();
    expect(response.data).toHaveProperty('createdAt');
    expect(response.data.createdAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(\+|-)\d{2}:\d{2}$/);
    objectId = response.data.id;
  });

  test('Get the new created object by id', async () => {
    const response = await objectsApi.singleObject(objectId, { validateStatus: () => true });
    expect(response.status).toBe(200);
    expect(typeof response.data.name).toBe('string');
    expect(response.data).toHaveProperty('data');
    expect(response.data.data.year).toEqual(2022);
    expect(response.data.data.price).toEqual(1999.99);
    expect(response.data.data['CPU model']).toBeDefined();
    expect(response.data.data['Hard disk size']).toBeDefined();
    objectId = response.data.id;
  });

  test('Update the object fully by its id', async () => {
    const response = await objectsApi.updateObject(objectId, {
      "name": "Apple MacBook Pro Air",
      "data": {
        "year": 2024,
        "price": 3000.00,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        "color": "silver"
      }
    }, { validateStatus: () => true });
    expect(response.status).toEqual(200);
    expect(typeof response.data.name).toBe('string');
    expect(response.data.name).toEqual('Apple MacBook Pro Air');
    expect(response.data).toHaveProperty('data');
    expect(response.data.data.year).toEqual(2024);
    expect(response.data.data.price).toEqual(3000.00);
    expect(response.data.data['CPU model']).toBeDefined();
    expect(response.data.data['Hard disk size']).toBeDefined();
    expect(response.data.data.color).toEqual('silver');
    expect(response.data).toHaveProperty('updatedAt');
    expect(response.data.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(\+|-)\d{2}:\d{2}$/);
  });
  
  test('Update the object partially by its id', async () => {
    const response = await objectsApi.updateObjectPartially(objectId,
      {
                "name": "Apple MacBook Air (Updated)",
                "data": {
                    "price": 4000.00
                }
            },
      { validateStatus: () => true });
    console.log(response);
    expect(response.status).toEqual(200);
    expect(response.data.name).toEqual('Apple MacBook Air (Updated)');
    expect(response.data).toHaveProperty('data');
    expect(response.data.data.price).toEqual(4000.00);
  });
  
  test('Try update the object with invalid Id', async () => {
    const invalidObjectId =  simpleFaker.string.uuid();; 
    const response = await objectsApi.updateObjectPartially(invalidObjectId, {
      "data": {
        "color": "silver"
      }
    }, { validateStatus: () => true });
    console.log(invalidObjectId);
    console.log(response);
    expect(response.status).toEqual(404);
    expect(response.data.error).toBe(`The Object with id = ${invalidObjectId} doesn't exist. Please provide an object id which exists or generate a new Object using POST request and capture the id of it to use it as part of PATCH request after that.`);
  });
  
  test('Delete the object by its id', async() => {
    const response = await objectsApi.deleteObject(objectId, { validateStatus: () => true });
    expect(response.status).toEqual(200);
    expect(response.data.message).toBe(`Object with id = ${objectId} has been deleted.`);
  });
    
})