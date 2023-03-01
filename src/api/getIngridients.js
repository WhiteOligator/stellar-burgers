import { makeRequest } from "./makeRequest"


const URL = 'ingredients'

export const getIngridients = (config) => makeRequest({
    method: 'GET',
    url: URL,
    ...config,
})