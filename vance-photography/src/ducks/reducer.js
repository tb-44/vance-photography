import axios from 'axios';

//SET INITIAL STATE
const initialState = {
    parent: {
        id: ''
    }
}

const GET_PARENT_INFO = "GET_PARENT_INFO";

//ACTION CREATORS
export function getParentInfo() {
    const parentInfo = axios.get('/auth/me').then( res => { 
        return res.data
    })
    return {
        type: GET_PARENT_INFO,
        payload: parentInfo
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_PARENT_INFO + '_PENDING':
            return state;
            
        case GET_PARENT_INFO + '_FULFILLED':
            return Object.assign({}, state, { parent: action.payload });

        default:
            return state;
    }
}