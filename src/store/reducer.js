import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_LOREM_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case FETCH_LOREM_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};
