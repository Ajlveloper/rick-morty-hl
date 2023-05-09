import { ACTION_TYPES } from "../Common/types"

const {
    GET_CHARACTER,
    SET_QUERY,
    LOADER_OFF,
    LOADER_ON,
    FILTER_BY_STATUS,
    SET_CURRENT_PAGE,
    SET_ERROR_DETAIL,
    SET_DETAIL_ID,
    GET_CHARACTER_DETAIL,
    ADD_TO_WISH_LIST
} = ACTION_TYPES;

const getCharacter = (payload) => {
    return {
        type: GET_CHARACTER,
        payload
    }
}

const setQuery = (payload) => {
    return {
        type: SET_QUERY,
        payload
    }
}

const setLoading = (payload) => {
    return {
        type: payload ? LOADER_ON : LOADER_OFF,
    }
}

const filterByStatus = (payload) => {
    return {
        type: FILTER_BY_STATUS,
        payload
    }
}

const setCurrentPage = (payload) => {
    return {
        type: SET_CURRENT_PAGE,
        payload
    }
}

const getCharacterDetail = (payload) => {
    return {
        type: GET_CHARACTER_DETAIL,
        payload
    }
}

const setErrorDetail = (payload) => {
    return {
        type: SET_ERROR_DETAIL,
        payload
    }
}

const setDetailId = (payload) => {
    return {
        type: SET_DETAIL_ID,
        payload
    }
}

const addToWishList = (payload) => {
    return {
        type: ADD_TO_WISH_LIST,
        payload
    }
}

export {
    getCharacter,
    setQuery,
    setLoading,
    filterByStatus,
    setCurrentPage,
    getCharacterDetail,
    setErrorDetail,
    setDetailId,
    addToWishList
}