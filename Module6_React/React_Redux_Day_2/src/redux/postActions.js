export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'

// action creators

const fetchPostsRequest = () => ({type:FETCH_POSTS_REQUEST})
const fetchPostsSuccess = (posts) => ({type:FETCH_POSTS_SUCCESS , payload : posts})
const fetchPostsError = (error) => ({type:FETCH_POSTS_ERROR , payload : error})

export const fetchPosts = () => {
    return async(dispatch)=>{
        dispatch(fetchPostsRequest())
        try{

            const res = await fetch("https://jsonplaceholder.typicode.com/posts");

            const data = await res.json();

            dispatch(fetchPostsSuccess(data))

        }catch(error){
            dispatch(fetchPostsError(error))
        }
    }
}