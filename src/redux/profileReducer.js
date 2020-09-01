const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    postData: [
        { id: 1, message: 'Hey bitch', likesCount: 12 },
        { id: 2, message: 'Wassup', likesCount: 11 },
        { id: 4, message: 'Yo yo yo 1483369', likesCount: 14 },
    ],
    profile: null
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.postData, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const onButtonHandlerActionCreator = (newPostText) => ({ type: ADD_POST, newPostText});


export default profileReducer;