import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { NavLink } from "react-router-dom";
import image1 from "../../../Images/01.ppm";
import image2 from "../../../Images/02.webp";
import image3 from "../../../Images/03.webp";
import image4 from "../../../Images/04.webp";
import image5 from "../../../Images/05.jpg";

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink
        to={"/dialogs/" + props.id}
        className={({ isActive }) => (isActive ? s.activeLink : undefined)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  const dialogData = [
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
    { id: 5, message: "Fifth message about Hallo" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.title}>Dialogs</div>
      <div className={s.wrapper}>
        <div className={s.dialogsArea}>
          <Dialog name={dialogData[0].name} id={dialogData[0].id} />
          <Dialog name={dialogData[1].name} id={dialogData[1].id} />
          <Dialog name={dialogData[2].name} id={dialogData[2].id} />
          <Dialog name={dialogData[3].name} id={dialogData[3].id} />
          <Dialog name={dialogData[4].name} id={dialogData[4].id} />
          <Dialog name={dialogData[5].name} id={dialogData[5].id} />
        </div>
        <div className={s.line}></div>

        <div className={s.messages}>
          <Message
            name={dialogData[0].name}
            image={dialogData[0].image}
            message={messagesData[0].message}
          />
          <Message
            name={dialogData[1].name}
            image={dialogData[1].image}
            message={messagesData[1].message}
          />
          <Message
            name={dialogData[2].name}
            image={dialogData[2].image}
            message={messagesData[2].message}
          />
          <Message
            name={dialogData[3].name}
            image={dialogData[3].image}
            message={messagesData[3].message}
          />
          <Message
            name={dialogData[4].name}
            image={dialogData[4].image}
            message={messagesData[4].message}
          />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
