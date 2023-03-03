import React from "react";

const CharactersCard = ({ user }) => {
  return (
    <div className="single-user">
      <img src={user.image} alt="" />
      <div className="user-info">
        <h4>{user.name}</h4>
        <p className="user-mail">Location🌍:{user.location.name}</p>
        <p className="user-status">Status🆘:{user.status}</p>
        <p className="user-gender">Gender👥:{user.gender}</p>
        <p className="user-species">
          {" "}
          Species👤:
          {user.species}
        </p>
      </div>
    </div>
  );
};

export default CharactersCard;
