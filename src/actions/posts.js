import { UPDATE_POSTS } from './actionTypes';
import { APIUrls } from '../helpers//urls';
export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      })
      .catch((err) => console.log('error'));
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
