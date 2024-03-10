import React, { useState } from "react";
import "../index.css";

const AddUser = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName == "" && lastName == "" && email === "") {
      alert("You Must Write Something!");
      return;
    }
    onAdd(firstName, lastName, email);
    // Clear the input fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  const handleCreate = () => {
    setShowForm(true);
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-success mb-4 mt-3 create-btn"
        onClick={handleCreate}
      >
        Create +
      </button>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="w-50 d-flex justify-content-between align-items-center m-auto mb-3 mt-2 rounded-3 "
        >
          <div className="div-with-button mb-3 w-50">
            <label htmlFor="exampleName1" className="form-label">
              First Name
            </label>
            <input
              value={firstName}
              type="text"
              className="form-control"
              id="exampleName1"
              name="name"
              placeholder="John"
              aria-describedby="emailHelp"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="div-with-button mb-3 w-50">
            <label htmlFor="exampleName2" className="form-label">
              Last Name
            </label>
            <input
              value={lastName}
              type="text"
              className="form-control"
              id="exampleName2"
              name="name"
              placeholder="Doe"
              aria-describedby="emailHelp"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className=" mb-3 w-100 d-flex justify-content-between align-items-center">
            <div className="w-100 email-div">
              <label htmlFor="exampleEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control "
                placeholder="user123@gmail.com"
                id="exampleEmail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary align-self-end">
              Add
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddUser;
