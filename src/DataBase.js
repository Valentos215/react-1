import image1 from "./Images/01.ppm";
import image2 from "./Images/02.webp";
import image3 from "./Images/03.webp";
import image4 from "./Images/04.webp";
import image5 from "./Images/05.jpg";

const usersData = [
  { id: 1, name: "Andru", image: image1 },
  { id: 2, name: "Ostin", image: image2 },
  { id: 3, name: "Mike", image: image3 },
  { id: 4, name: "Ivan", image: image4 },
  { id: 5, name: "Kolian", image: image5 },
  { id: 6, name: "Vasilii", image: image1 },
];

const messagesData = [
  { id: 1, message: "First message about weather" },
  { id: 2, message: "Second message about a girl" },
  { id: 3, message: "Third message about a food" },
  { id: 4, message: "Fourth message about a message" },
  { id: 5, message: "Fifth message about Hallo!" },
];

const postData = [
  { id: 1, text: "Hey, why nobody love me?", likes: 10 },
  { id: 2, text: "Happy message!", likes: 2 },
  { id: 3, text: "Some message for a some day", likes: 0 },
];

export { usersData, messagesData, postData };
