import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails.jsx";

function App() {
  // Stanje aplikacije za pohranu podataka o korisniku i repozitorijima
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  //unos korisničkog imena
  const handleUserSubmit = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        fetch(data.repos_url)
          .then((response) => response.json())
          .then((reposData) => setRepositories(reposData))
          .catch((error) =>
            console.error("Error fetching repositories:", error)
          );
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setUser(null);
        setRepositories([]);
      });
  };

  // resetiranje stanja aplikacije i povratak
  const handleReset = () => {
    setUser(null);
    setRepositories([]);
  };

  // Provjera stanja "user" 
  if (user) {
    //Prikaz detalja korisnika i repozitorija
    return (
      <UserDetails
        user={user}
        repositories={repositories}
        onReset={handleReset}
      />
    );
  } else {
    //Prikaz forme za unos korisničkog imena
    return <UserForm onSubmit={handleUserSubmit} />;
  }
}

export default App;
