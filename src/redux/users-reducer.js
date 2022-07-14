import image1 from "../Images/01.ppm";
import image2 from "../Images/02.webp";
import image3 from "../Images/03.webp";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      name: "Andru",
      f: true,
      o: true,
      d: true,
      status: "Looking for a new job",
      photos: { small: image1, large: image1 },
      location: { country: "Itali", city: "Milan" },
    },
    {
      id: 2,
      name: "Ostin",
      f: true,
      o: true,
      d: true,
      status: "Learning React",
      photos: { small: image2, large: image2 },
      location: { country: "USA", city: "Boston" },
    },
    {
      id: 3,
      name: "Mike",
      f: true,
      o: true,
      d: true,
      status: "Life is good",
      photos: { small: image3, large: image3 },
      location: { country: "Spain", city: "Madrid" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, f: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, f: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...initialState.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
