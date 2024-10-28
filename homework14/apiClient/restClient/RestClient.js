import axios from 'axios';

export default class RestClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl,
    this.axiosInstance = axios.create({ baseURL: this.baseUrl, validateStatus: () => true });
  }

  async sendGet({ url, params, additionalConfigs }) {
    return this.#sendRequest({ url, params, additionalConfigs, method: 'GET' })
  }
  async sendPost({ url, params, data, additionalConfigs }) {
    return this.#sendRequest({ url, params, data, additionalConfigs, method: 'POST' })
  }
  async sendPut({ url, params, data, additionalConfigs }) {
    return this.#sendRequest({ url, params, data, additionalConfigs, method: 'PUT' })
  }
  async sendPatch({ url, params, headers, data, additionalConfigs }) {
    return this.#sendRequest({ url, params, headers, data, additionalConfigs, method: 'PATCH' })
  }
  async sendDelete({ url, params, additionalConfigs }) {
    return this.#sendRequest({ url, params, additionalConfigs, method: 'DELETE' })
  }

  async #sendRequest({ url, method, params, data, additionalConfigs }) {
    try {
      return this.axiosInstance.request({ url, method, params, data, ...additionalConfigs })
    } catch (err) {
      throw new Error(`Error occurred on request to ${this.baseUrl}${this.url}. Error stack: ${err.stack}`);
    }
  }
}