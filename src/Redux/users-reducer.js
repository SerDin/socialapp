const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';


let initialState = {
    users: [/*
        {
            id: 1,
            photoURL:'http://www.pkicon.com/ru/download/avatar-the-last-airbender-icon-39031/png/',
            followed: false,
            fullName: 'Sergey',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoURL:'http://www.pkicon.com/ru/download/fairy-tail-icon-39034/png/',
            followed: true,
            fullName: 'Nicola',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoURL:'http://www.pkicon.com/ru/download/fullmetal-alchemist-icon-39035/png/',
            followed: false,
            fullName: 'Dimych',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },*/],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS: {
            return {
                ...state,
                users: [ ...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                 currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        default:
            return state
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export default usersReducer