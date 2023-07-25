import React from "react";
import PropTypes from "prop-types";

const UserDetails = ({ user, repositories, onReset }) => {
  return (
    <div>
      <img src={user.avatar_url} alt="User Avatar" />
      <h2>{user.name}</h2>
      <p>{user.location}</p>
      <p>{user.bio}</p>
      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
