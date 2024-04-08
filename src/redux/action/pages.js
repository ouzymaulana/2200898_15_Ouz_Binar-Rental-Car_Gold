import { PAGES_UPDATE } from "../reducer/pages";

export const pagesUpdate = (page) => (dispatch) => {
  dispatch({
    type: PAGES_UPDATE,
    payload: page,
  });
};
