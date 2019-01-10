import axios from 'axios';
// import jsonholder from  '../apis/jsonholder';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => async dispatch => {
    const response = await axios.get('https://hackathon-jan.herokuapp.com/api/books'); 
    dispatch({ type: 'FETCH_POSTS', payload: response.data.data});
     
    };
        export const createPost = (values) => async dispatch => {
        const response = await axios.post(`https://hackathon-jan.herokuapp.com/api/book`, values);
        dispatch({ type: 'CREATE_POST', payload:response });
        };

    export const fetchPost = (ISBN) => async dispatch => {
        const response = await axios.get(`https://hackathon-jan.herokuapp.com/api/book/isbn/${ISBN}`);
        dispatch({ type: 'FETCH_POST', payload:response });
        };
