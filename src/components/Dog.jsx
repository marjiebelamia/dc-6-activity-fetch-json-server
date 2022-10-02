import React from "react";
import { useState, useEffect } from "react";

const Dog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dogs")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((dog) => {
          return (
            <>
              <div className="card m-4 p-1 bg-primary">
                <p className="card-text">id: {dog.id}</p>
                <h5 className="card-title">breed: {dog.breed}</h5>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Dog;
