import axios from "axios";

const axiosInstance = axios.create({ baseURL: 'https://api.restful-api.dev', validateStatus: () => true });

// const getAllObjects = await axiosInstance.get('/objects');
// console.log(getAllObjects.data);

// const getObjectsByIds = await axiosInstance.get('/objects?id=3&id=5&id=10');
// console.log(getObjectsByIds.data);

// const getSingleObject = await axiosInstance.get('/objects/13');
// console.log(getSingleObject.data);

// const createObject = await axiosInstance.post('/objects',
//     {
//         "name": "Apple MacBook Pro 18",
//         "data": {
//             "year": 2022,
//             "price": 2849.99,
//             "CPU model": "Intel Core i10",
//             "Hard disk size": "1.5 TB"
//         }
//     });
// console.log(createObject.data);
    
// const id = createObject.data.id;
// console.log(id);

// const updateObject = await axiosInstance.put(`/objects/${id}`,
//     {
//         "name": "Apple MacBook Pro 18",
//         "data": {
//             "year": 2022,
//             "price": 3000.00,
//             "CPU model": "Intel Core i10",
//             "Hard disk size": "1.5 TB",
//             "color": "black"
//         }
//     });
//     console.log(updateObject.data);

// const partiallyUpdateObject = await axiosInstance.patch(`/objects/${id}`,
//         {
//         "name": "Apple MacBook Air"
//        });
// console.log(partiallyUpdateObject.data);
       
const deleteObject = await axiosInstance.delete('/objects/2566');
console.log(deleteObject.data);
