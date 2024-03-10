import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
  const [users, setUsers] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(users);
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid justify-content-center">
          <h2 className="navbar-brand text-center">CRUD USING API</h2>
        </div>
      </nav>
    </>
  );
}

export default App;
