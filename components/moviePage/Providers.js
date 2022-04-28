import React from "react";

function Providers({ providers }) {
  const { buy, rent } = providers.US;

  return (
    <div className="md:flex justify-center ml-2 mt-4">
      {rent && (
        <div className="mx-2">
          <h1 className="font-bold text-center text-pink-500">Rent</h1>
          {rent?.map((rent) => {
            const { provider_id, provider_name } = rent;
            return (
              <p
                className="bg-pink-500 rounded-md my-1 text-center text-white p-2"
                key={provider_id}
              >
                {provider_name}
              </p>
            );
          })}
        </div>
      )}
      {buy && (
        <div>
          <h1 className="font-bold text-center text-blue-500">Buy</h1>
          {buy?.map((buy) => {
            const { provider_id, provider_name } = buy;
            return (
              <p
                className="bg-blue-500 rounded-md my-1 text-center text-white p-2"
                key={provider_id}
              >
                {provider_name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Providers;
