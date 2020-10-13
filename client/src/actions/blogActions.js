import axios from 'axios';

export const getBlogPosts = async (dispatch) => {
    const res = await axios.get('blog');
    dispatch({
        type: 'GET_POSTS',
        payload: res.data
    });
}

export const getBlogPost = async (id, dispatch) => {
    const res = await axios.get('blog/' + id);
    dispatch({
        type: 'GET_POST',
        payload: res.data
    });
}