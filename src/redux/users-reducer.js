import image1 from "../Images/01.ppm";
import image2 from "../Images/02.webp";
import image3 from "../Images/03.webp";
import image4 from "../Images/04.webp";
import image5 from "../Images/05.jpg";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      name: "Andru",
      photos: { small: image1, large: image1 },
      f: false,
      o: true,
      d: true,
      status: "Like tennis",
      country: "Spain",
      city: "Madrid",
    },
    {
      id: 2,
      name: "Ostin",
      photos: { small: image2, large: image2 },
      f: true,
      o: false,
      d: true,
      status: "Like football",
      country: "USA",
      city: "Boston",
    },
    {
      id: 3,
      name: "Mike",
      photos: { small: image3, large: image3 },
      f: true,
      o: true,
      d: true,
      status: "Like drinks",
      country: "Spain",
      city: "Barca",
    },
    {
      id: 4,
      name: "Ivan",
      photos: { small: image4, large: image4 },
      f: true,
      o: true,
      d: false,
      status: "Like meet",
      country: "Belarus",
      city: "Minsk",
    },
    {
      id: 5,
      name: "Kolian",
      photos: { small: image5, large: image5 },
      f: true,
      o: true,
      d: true,
      status: "Like life",
      country: "Ukraine",
      city: "Kiev",
    },
    {
      id: 6,
      name: "Vasilii",
      photos: { small: image1, large: image1 },
      f: false,
      o: true,
      d: true,
      status: "Like React",
      country: "Ukraine",
      city: "Dnepr",
    },
  ],
  friendsPage: [],
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
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
