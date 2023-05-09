import axios from 'axios'

const {
    REACT_APP_BASE_URL: baseUrl
} = process.env;

const axiosCharacter = axios.create({
    baseURL: `${baseUrl}character/`
});

export {
    axiosCharacter
}