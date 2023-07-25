import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  // Funkcija za praćenje unosa korisničkog imena
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  //Funkcija za obradu podataka nakon klika na button
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Unos korisničkog imena */}
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter GitHub username"
      />
      {/*Button za slanje podataka */}
      <button type="submit">Submit</button>
    </form>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
