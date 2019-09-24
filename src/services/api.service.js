import { SERVER_URL } from '../config/config';
import { store } from '../redux/store';

let instance = null;

// TODO: Use axios !!

export default class Api {

  static get instance() {
    if (instance === null) {
      instance = new Api();
    }

    return instance;
  }

  async get(url) {
    const headers = this.getHeaders();
    console.log(headers);
    try {
      const response = await fetch(SERVER_URL + url, { headers });
      console.log(response);
      const data = await response.json();
      if (response.status !== 200) {
        throw new Error(data.message);
      }

      return data;
    } catch(error) {
      throw new Error(error);
    }
  }

  async post(url, body) {
    const headers = this.getHeaders();
    const response = await fetch(SERVER_URL + url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    });
    console.log(response);
    const data = await this._parseJSON(response);

    if (response.status !== 200) {
      throw new Error(data.message);
    }

    return data;
  }

  async _parseJSON(response) {
    const text = await response.text();
    return text ? JSON.parse(text) : {};
  }

  getHeaders() {
    const storeData = store.getState();
    const token = storeData.auth.token;
    const headers = {};
    
    console.log(storeData);
    headers['Content-Type'] = 'application/json';
    
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token.token}`;
    }

    return headers;
  }

}
