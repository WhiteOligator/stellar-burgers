import axios from "axios"

export const API_ENDPOINT = 'https://norma.nomoreparties.space/api'

type ConfigType = {
    method: string,
    url: string
};

export const makeRequest = (config: ConfigType) => {
    config.url = `${API_ENDPOINT}/${config.url}`

    return axios(config.url)
            .catch(function (error) {
                if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                } else if (error.request) {
                console.log(error.request);
                } else {
                console.log('Error', error.message);
                }
                console.log(error.config);
            });
}
