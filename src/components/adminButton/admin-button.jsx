import React from "react";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";

//styles
import "./admin-button.scss";

const AdminButton = ({ onClick, title }) => {
  return (
    <div className='sign-out-btn'>
      <button className='nav-button' onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default withRouter(withFirebase(AdminButton));
