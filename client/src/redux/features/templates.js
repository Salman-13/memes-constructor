const initialState = {
  loading: false,
  items: [],
  error: null,
  img: null,
};

export default function templates(state = initialState, action) {
  switch (action.type) {
    case "templates/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "templates/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "templates/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "templates/choice":
      return {
        ...state,
        loading: false,
        img: action.payload,
      };
    default:
      return state;
  }
}

export const getTemplates = () => async (dispatch) => {
  dispatch({ type: "templates/fetch/pending" });

  const response = await fetch("/templates");
  const json = await response.json();

  if (json.error) {
    dispatch({ type: "templates/fetch/rejected", payload: json.error });
  } else {
    dispatch({ type: "templates/fetch/fulfilled", payload: json });
  }
};

export const choiceTemplate = (img) => (dispatch) => {
  dispatch({ type: "templates/choice", payload: img });
};