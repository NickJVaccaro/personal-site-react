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

export const calculateReadingTime = (content) => {
    if(!content) return '? minutes';
    let minutes = content.split(' ').length / 130;
    if (minutes < 1) minutes = 1;
    else minutes = Math.ceil(minutes);
    return minutes + ' minute' + (minutes > 1 ? 's' : '');
}