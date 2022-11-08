import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

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

      <header>

      <section className="headerSection left">
        <h4>Joker</h4>
        <h1>Local</h1>
        <p>
          Lorem ipsum dolor sit amet conse adipisicing elit. Sit iste ipsum
          perspiciatis pariatur, minus
        </p>
        <button onClick={getAPI}>Fetch API</button>
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
      </section>
      <section className="headerSection right">
        <h4>Joker 2</h4>
        <h1>General</h1>
        <p>
          Lorem ipsum dolor sit amet conse adipisicing elit. Sit iste ipsum
          perspiciatis pariatur, minus
        </p>
        <button onClick={getAPI}>Fetch API</button>
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
      </section>
      </header>

    </div>
  );
}

export default FetchRandomJokes
