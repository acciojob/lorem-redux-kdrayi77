// src/store/actions.js
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchLoremStart = () => ({
  type: FETCH_START,
});

export const fetchLoremSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const fetchLoremError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

// Mock thunk — no real API call
export const fetchLorem = () => async (dispatch) => {
  dispatch(fetchLoremStart());

  // small delay to show "Loading..."
  await new Promise((res) => setTimeout(res, 600));

  // fake payload that matches the required shape
  dispatch(
    fetchLoremSuccess({
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    })
  );
};
