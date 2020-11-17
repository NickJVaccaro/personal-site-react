import axios from 'axios';

export const getNowData = async (dispatch) => {
    const res = await axios.get('now');
    dispatch({
        type: 'GET_NOW',
        payload: res.data
    });
    console.log(res.data);
}