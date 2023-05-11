import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Error = () => {
    // Variable to hold Obi Wan info
    const [info, setInfo] = useState([]);

    // UseEffet to pull Obi Wan data from api
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/10/")
        .then((response) => {
            // Store data in variable
            setInfo(response.data);
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Error: ", err);
        })
    }, [])

    return (
        <div>
            <h1>These aren't the droids you're looking for</h1>
            <img src="https://gifdb.com/images/high/obi-wan-kenobi-hello-there-greetings-hdlogoveds6f3h1n.gif" alt="Obi Wan" />
        </div>
    )
}

export default Error