import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Error from "./Error"

const Films = () => {
    // Store variables sent from the route
    const { id } = useParams();

    // Store data retrieved from api
    const [info, setInfo] = useState([]);

    // Variable to check if there is an error
    const [errorCheck, setErrorCheck] = useState(false);

    // UseEffect to get data from api
    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}`)
            .then((response) => {
                // Log data to check formatting
                console.log(response);
                // Store data into variable
                setInfo(response.data);
                // Set errorCheck to false
                setErrorCheck(false);
            })
            .catch((err) => {
                // Log error if we get one
                console.log("Error: ", err);
                // Set errorCheck to true
                setErrorCheck(true);
            })
    }, [id]);

    if (errorCheck) {
        return (
            <div>
                <Error />
            </div>
        )
    } else {
        return (
            <div>
                <h1>{info.title}</h1>
                <h3>Director: {info.director}</h3>
                <p>Intro: {info.opening_crawl}</p>
            </div>
        )
    }
}

export default Films