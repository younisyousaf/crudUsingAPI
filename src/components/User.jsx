import React from "react";
import "../index.css";
const User = ({ id, email, firstName, lastName, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div>
      <div className="list">
        <ul className="list-group ">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {/* <span>
              {firstName} {lastName}
            </span>
            <span>{email}</span>{" "} */}
            <span>
              {firstName && lastName ? `${firstName} ${lastName}` : "N/A"}
            </span>
            <span>{email || "N/A"}</span>{" "}
            <span>
              <button type="button" className="btn btn-primary edit-btn">
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            </span>
          </li>
        </ul>
      </div>
      {/* <div>
        <p>ID: {id}</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
      </div> */}
    </div>
  );
};

export default User;
