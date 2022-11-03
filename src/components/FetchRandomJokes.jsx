import React, { useState } from "react";

function FetchRandomJokes() {
  const [data, setData] = useState([]);

  //Get Method
  const getAPI = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return (
    <div>
      My API
      <button onClick={apiGet}>Fetch API</button>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.setup}</h3>
              <p>
                {item.punchline}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FetchRandomJokes