import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-red-600">Oops!!</h1>
      <h2 className="text-2xl text-gray-800">Something went wrong!!</h2>
      <h3 className="text-xl text-gray-600">
        {error.status} : {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
