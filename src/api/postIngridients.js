import { makeRequest } from "./makeRequest"
import { Buffer } from "buffer";

const URL = 'orders'

const username = '';
const password = ''

const token = `${username}:${password}`;
const encodedToken = Buffer.from(token).toString('base64');



export const postIngridients = (config) => makeRequest({
    method: 'POST',
    url: URL,
    headers: { authorization: 'Basic '+ encodedToken },
    ...config,
})