import image1 from "../Images/01.ppm";
import image2 from "../Images/02.webp";
import image3 from "../Images/03.webp";
import image4 from "../Images/04.webp";
import image5 from "../Images/05.jpg";

const ADD_USER = "ADD_USER";

let initialState = {
  users: [
    { id: 1, name: "Andru", image: image1, f: true, o: true, d: true },
    { id: 2, name: "Ostin", image: image2, f: true, o: false, d: true },
    { id: 3, name: "Mike", image: image3, f: true, o: true, d: true },
    { id: 4, name: "Ivan", image: image4, f: true, o: true, d: false },
    { id: 5, name: "Kolian", image: image5, f: true, bf: true, d: true },
    { id: 6, name: "Vasilii", image: image1, f: false, o: true, d: true },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return state;
    default:
      return state;
  }
};

export const addUserActionCreator = () => ({ type: ADD_USER });

export default usersReducer;
