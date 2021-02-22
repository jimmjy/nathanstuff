import React, { useState, useEffect } from "react";
import { withFirebase } from "../../components/Firebase";

//components
import Modal from "../modal/modal";

//styles
import "./detailsCard.scss";

const DetailsCard = ({ message, firebase }) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  useEffect(() => {
    return () => setIsModalShowing(false);
  }, []);

  //remove from firebase
  const removeDataEntry = (id) => {
    firebase.message(id).remove();
  };

  console.log(message);

  return (
    <li className='comment-card'>
      <span>
        <strong>Name:</strong> {message.name}
      </span>
      <span>
        <strong>Email:</strong> {message.email}
      </span>
      <span>
        <strong>phone:</strong> {message.phone}
      </span>
      <span>
        <strong>Comment:</strong> {message.message}
      </span>
      <button onClick={() => removeDataEntry(message.id)}>Remove</button>
      <button onClick={() => setIsModalShowing(true)}>Quick View</button>
      {isModalShowing && (
        <Modal setIsModalShowing={setIsModalShowing}>
          <div className='modal-body'>{message.name}</div>
        </Modal>
      )}
    </li>
  );
};

export default withFirebase(DetailsCard);
