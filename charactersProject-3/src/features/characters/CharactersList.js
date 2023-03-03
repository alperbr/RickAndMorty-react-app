import React from "react";
import { useGetCharactersQuery } from "../api/apiSlice";
import CharactersCard from "./CharactersCard";

function CharactersList() {
  const {
    data: characters,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCharactersQuery();

  let characterContent;

  const dataApi = characters?.results;

  if (isLoading) {
    characterContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (isSuccess) {
    characterContent = (
      <div className="charactersList">
        {dataApi.map((item) => {
          return (
            <div className="charactersList">
              <CharactersCard user={item} key={item.id} />
            </div>
          );
        })}
        ;
      </div>
    );
  } else if (isError) {
    characterContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return <div>{characterContent}</div>;
}

export default CharactersList;
