const ADD_USER = "ADD_USER";

let initialState = {
  users: [{ id: 1, name: "", image: "", f: true, o: true, d: true }],
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
