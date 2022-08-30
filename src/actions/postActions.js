import { FETCH_POST, NEW_POST } from "../actions/types";

export const fetchPosts = () => (dispatch) => {
  console.log("first");
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json().then((posts) =>
      dispatch({
        type: FETCH_POST,
        payload: posts,
      })
    )
  );
};
