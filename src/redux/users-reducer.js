import { usersAPI } from "../api/api";
import image1 from "../Images/01.ppm";
import image2 from "../Images/02.webp";
import image3 from "../Images/03.webp";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_FATCHING = "TOGGLE_FATCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
  users: [
    {
      id: 1,
      name: "Andru",
      followed: true,
      o: true,
      d: true,
      status: "Looking for a new job",
      photos: { small: image1, large: image1 },
      location: { country: "Itali", city: "Milan" },
    },
    {
      id: 2,
      name: "Ostin",
      followed: true,
      o: true,
      d: true,
      status: "Learning React",
      photos: { small: image2, large: image2 },
      location: { country: "USA", city: "Boston" },
    },
    {
      id: 3,
      name: "Mike",
      followed: true,
      o: true,
      d: true,
      status: "Life is good",
      photos: { small: image3, large: image3 },
      location: { country: "Spain", city: "Madrid" },
    },
  ],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...action.users] };

    case SET_PAGE:
      return { ...state, currentPage: action.page };

    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount };

    case TOGGLE_FATCHING:
      return { ...state, isFetching: action.isFatching };

    case TOGGLE_FOLLOWING_PROGRESS:
      return { ...state, followingInProgress: action.isFatching };

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPage = (page) => ({ type: SET_PAGE, page });
export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const toggleFatching = (isFatching) => ({
  type: TOGGLE_FATCHING,
  isFatching,
});
export const toggleFollowingProgress = (isFatching) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFatching,
});

export const getUsers = (currentPage, pageSize, changePage) => (dispatch) => {
  dispatch(toggleFatching(true));
  dispatch(setPage(changePage));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleFatching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
  });
};

export const followClick = (id, followed) => (dispatch) => {
  dispatch(toggleFollowingProgress(id));
  if (followed) {
    usersAPI.unfollow(id).then((data) => {
      if (data.resultCode === 0) dispatch(unfollow(id));
      dispatch(toggleFollowingProgress(false));
    });
  } else {
    usersAPI.follow(id).then((data) => {
      if (data.resultCode === 0) dispatch(follow(id));
      dispatch(toggleFollowingProgress(false));
    });
  }
};

export default usersReducer;
