import axios from 'axios';
import { apiKey } from './apiKey';

export default axios.create({
      baseURL: 'https://api.unsplash.com/',
      headers: {
        Authorization: apiKey // <- to play arround this repo to have to have your own apiKey; Unsplash developers account
      }
    }); 

    // export const apiKey = 'Client-ID [your key] see api documentation for more info';

