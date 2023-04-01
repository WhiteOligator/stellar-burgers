import { makeRequest } from "./makeRequest"


const URL = 'ingredients'

export const getIngridients = () => makeRequest({
    method: 'GET',
    url: URL,
})