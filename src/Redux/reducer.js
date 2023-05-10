import { ACTION_TYPES } from "../Common/types";
const {
  GET_CHARACTER,
  SET_CHARACTERS_NEXT_PAGE,
  SET_TOTAL_PAGES,
  SET_QUERY,
  LOADER_OFF,
  LOADER_ON,
  FILTER_BY_STATUS,
  SET_CURRENT_PAGE,
  SET_DETAIL_ID,
  GET_CHARACTER_DETAIL,
  ADD_TO_WISH_LIST,
  SET_ERROR_DETAIL
} = ACTION_TYPES;

const initialState = {
  characters: [],
  charactersNextPage: false,
  totalPages: 1,
  query: "",
  loading: false,
  filterByStatus: "",
  pageCurrent: 1,
  isErrorDetail: false,
  characterDetail: {},
  characterId: null,
  wishList: JSON.parse(localStorage.getItem('wisthList')) || []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER: {
      return { ...state, characters: action.payload };
    }
    case SET_CHARACTERS_NEXT_PAGE: {
      return { ...state, charactersNextPage: action.payload };
    }
    case SET_TOTAL_PAGES: {
      return { ...state, totalPages: action.payload };
    }
    case SET_QUERY: {
      return { ...state, query: action.payload };
    }
    case LOADER_ON: {
      return { ...state, loading: true };
    }
    case LOADER_OFF: {
      return { ...state, loading: false };
    }
    case FILTER_BY_STATUS: {
      return { ...state, filterByStatus: action.payload };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, pageCurrent: action.payload };
    }
    case GET_CHARACTER_DETAIL: {
      return { ...state, characterDetail: action.payload };
    }
    case SET_DETAIL_ID: {
      return { ...state, characterId: action.payload };
    }
    case ADD_TO_WISH_LIST: {
      const character = state.characters.find(character => character.id === +action.payload);
      localStorage.setItem('wisthList', JSON.stringify([ character, ...state.wishList ]));
      return { 
        ...state, wishList: JSON.parse(localStorage.getItem('wisthList')),
      };
    }
    case SET_ERROR_DETAIL: {
      return { ...state, isErrorDetail: true };
    }
    default:
      return state;
  }
};

export default reducer;
