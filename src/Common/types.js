import { generateId } from "./utils"

const INPUTS_TYPES = {
    TEXT: 'text'
}

const BUTTON_TYPES = {
    SUBMIT: 'submit'
}

const ACTION_TYPES = {
    GET_CHARACTER: 'GET_CHARACTER',
    SET_CHARACTERS_NEXT_PAGE: 'SET_CHARACTERS_NEXT_PAGE',
    SET_QUERY: 'SET_QUERY',
    LOADER_ON: 'LOADER_ON',
    LOADER_OFF: 'LOADER_OFF',
    GET_STATUS: 'GET_STATUS',
    FILTER_BY_STATUS: 'FILTER_BY_STATUS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_ERROR_DETAIL: 'SET_ERROR_DETAIL',
    SET_DETAIL_ID: 'SET_DETAIL_ID',
    GET_CHARACTER_DETAIL: 'GET_CHARACTER_DETAIL',
    ADD_TO_WISH_LIST: 'ADD_TO_WISH_LIST'
}

const LABEL_TEXT = {
    FILTERS: {
        STATUS: 'Filtrar estatus'
    }
}

const CLASS_DEFAULT_TYPES = {
    select: 'select'
}

const STATUS_TYPES = [
    {
        name: 'alive',
        id: generateId()
    },
    {
        name: 'dead',
        id: generateId()
    },
    {
        name: 'unknown',
        id: generateId()
    },
]



export {
    INPUTS_TYPES,
    BUTTON_TYPES,
    ACTION_TYPES,
    LABEL_TEXT,
    CLASS_DEFAULT_TYPES,
    STATUS_TYPES
}