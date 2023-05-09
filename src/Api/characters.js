import { axiosCharacter } from "../config/axios"

const getCharacters = (query, signal) => {
    return axiosCharacter.get(query, signal)
}

const getCharacterDetailData = (id, signal) => {
    return axiosCharacter.get(id, signal)
}

export {
    getCharacters,
    getCharacterDetailData
}