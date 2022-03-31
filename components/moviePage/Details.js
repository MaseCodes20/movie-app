import React from "react";

function Details({ details, imageUrl }) {
  const {
    title,
    overview,
    release_date,
    runtime,
    status,
    production_companies,
    genres,
  } = details;
  return (
    <div className="mt-4 mx-auto">
      <h1 className="text-center font-bold text-4xl">{title}</h1>
      <p className="max-w-[400px] mx-auto mt-4">{overview}</p>
      <div className="flex justify-center mt-6">
        <p className="dataText">Release date:</p>
        <p>{release_date}</p>
      </div>

      <div className="flex justify-center mt-2">
        <p className="dataText">Runtime:</p>
        <p>{runtime} minutes</p>
      </div>

      <div className="flex justify-center mt-2">
        <p className="dataText">Status:</p>
        <p>{status}</p>
      </div>

      <div className="companiesAndGenresContainer">
        <p className="mr-2 text-center">Production companies</p>
        <div className="companiesAndGenresGrid">
          {production_companies?.map((company) => {
            const { id, logo_path, name } = company;
            return (
              <div key={id} className="p-2">
                <p className="text-center">{name}</p>
                <img
                  src={`${imageUrl}${logo_path}`}
                  alt={name}
                  className="h-7 mx-auto"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="companiesAndGenresContainer">
        <p className="text-center">Genres</p>
        <div className="companiesAndGenresGrid">
          {genres?.map((genre) => {
            const { id, name } = genre;
            return <p key={id}>{name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
