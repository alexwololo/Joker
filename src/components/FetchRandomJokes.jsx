import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

let jokeURLOne = "https://official-joke-api.appspot.com/jokes/random";
let jokeURLTwo = "https://official-joke-api.appspot.com/jokes/programming/random";

function FetchRandomJokes() {
    const [jokeOne, setJokeOne] = useState({});
    const [jokeTwo, setJokeTwo] = useState({});

    async function getJoke(jokeURL, setJoke) {
        const rslt = await fetch(jokeURL);
        const joke = await rslt.json();
        setJoke(joke);

        // fetch("https://official-joke-api.appspot.com/random_joke").then(rslt=> rslt.json()).then(data=> setJoke(data))
    }

    useEffect(() => {
        getJoke(jokeURLOne, setJokeOne);
        getJoke(jokeURLTwo, setJokeTwo);
    }, []);

    // //Get Method
    // const firstAPI = () => {

    //   fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    //     .then((response) => response.json())
    //     .then((json) => {
    //       console.log(json);
    //       setData((prevData => ({
    //         ...prevData,
    //         jokeOne: json
    //       })));
    //     });
    // };

    //Get Method
    const secondAPI = () => {
        fetch("https://official-joke-api.appspot.com/random_ten")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData((prevData) => ({
                    ...prevData,
                    jokeTwo: json,
                }));
            });
    };

    return (
        <div>
            <header
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/dpzxtgjp0/image/upload/v1668073875/cld-sample.jpg")`,
                }}
            >
                {/* <img className="image" src="https://res.cloudinary.com/dpzxtgjp0/image/upload/v1668073875/cld-sample.jpg" alt="" /> */}
                <section className="headerSection left">
                    <h1>Random</h1>
                    <div>
                        <ul>
                            <li key={jokeOne.id}>
                                <h3>{jokeOne.setup}</h3>
                                <p>{jokeOne.punchline}</p>
                            </li>
                        </ul>
                    </div>
                    <button className="btn" onClick={() => getJoke(jokeURLOne, setJokeOne)}>
                        Push me!
                    </button>
                    <div></div>
                </section>
                <section className="headerSection right">
                    <h1>Coder</h1>
                    <div>
                        <ul>
                            <li key={jokeTwo?.[0]?.id}>
                                <h3>{jokeTwo?.[0]?.setup}</h3>
                                <p>{jokeTwo?.[0]?.punchline}</p>
                            </li>
                        </ul>
                    </div>
                    <button className="btn2" onClick={() => getJoke(jokeURLTwo, setJokeTwo)}>
                        Dont push me!
                    </button>
                </section>
            </header>
        </div>
    );
}

export default FetchRandomJokes;
