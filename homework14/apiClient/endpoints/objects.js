import RestClient from "../restClient/RestClient";

export default class Object extends RestClient {
  constructor(){
    super('https://api.restful-api.dev')
    this.url = '/objects'
  }
  
  /*Get All Objects*/
  async objectsList() {
    return this.sendGet({url: `${this.url}`});
  }

  /*Get several Objects by ids*/
  async objectsByIds(objectId1, objectId2, objectId3) {
    return this.sendGet({url: `${this.url}?id=${objectId1}&id=${objectId2}&id=${objectId3}`});
  }

  /*Get single Object by id*/
  async singleObject(objectId) {
    return this.sendGet({url: `${this.url}/${objectId}`});
  }

  /* Create Object
    @param data = {
       "name": "Apple MacBook Pro 16",
       "data": {
          "year": 2019,
          "price": 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
        }
    }
    }
    */
  async addObject(data) {
    return this.sendPost({url: `${this.url}`, data});
  }
 
  /*
    @param data = {
       "name": "Apple MacBook Pro 16",
       "data": {
          "year": 2019,
          "price": 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
        }
    }
    }
    */
  async updateObject(objectId, data) {
    return this.sendPut({url: `${this.url}/${objectId}`, data});
  }

  /*
    @param data = {
       "name": "Apple MacBook Pro Air",
       "data": {
          "price": 3000.99
        }
    }
    }
    */
async updateObjectPartially(objectId, data) {
    return this.sendPatch(
        { url: `${this.url}/${objectId}`, data, headers: { 'Content-Type': 'application/json' } }
    );
}

  async deleteObject(objectId) {
    return this.sendDelete({url: `${this.url}/${objectId}`});
  }

}