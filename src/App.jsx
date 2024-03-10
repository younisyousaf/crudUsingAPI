import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import User from "./components/User";
import AddUser from "./components/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(`https://dummyjson.com/users?limit=3`)
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(users);
  // Adding Users Data
  const onAdd = async (firstName, lastName, email) => {
    try {
      const response = await fetch(`https://dummyjson.com/users/add`, {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        console.error("Error adding user:", response.statusText);
        return;
      }
      const responseData = await response.json();
      // Assuming the server responds with the new user data
      setUsers((prevUsers) => [...prevUsers, responseData]);
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  // Deleting User Data
  const onDelete = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.log("Error Deleting User!", response.statusText);
        return;
      } else {
        setUsers(users.filter((user) => user.id !== id));
      }
    } catch (error) {
      console.log("Error Deleting User", error.message);
    }
  };
  return (
    <>
      <nav className="navbar bg-secondary">
        <div className="container-fluid justify-content-center">
          <h2 className="navbar-brand text-center text-white">
            CRUD USING API
          </h2>
        </div>
      </nav>
      <div className="add-user">
        <AddUser onAdd={onAdd} />
      </div>
      <div>
        {users.map((user) => (
          <User
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            key={user.id}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}

export default App;
