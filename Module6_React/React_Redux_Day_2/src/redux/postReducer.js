import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./postActions";

const initialState = {
    loading : false,
    posts : [],
    error : ""
}

const postReducer = (state=initialState , action) =>{
    switch(action.type){
        case FETCH_POSTS_REQUEST : {
            return {...state , loading : true}
        }

        case FETCH_POSTS_SUCCESS : {
            return {loading : false , posts : action.payload , error : ""}
        }

        case FETCH_POSTS_ERROR : {
            return {loading : false , posts : [] , error : action.payload}
        }

        default : 
         return state
    }
}

export default postReducer