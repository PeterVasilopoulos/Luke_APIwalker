import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import Error from "./Error"

const People = () => {
    // Store variables sent from the route
    const { id } = useParams();

    // Store data retrieved from api
    const [info, setInfo] = useState([]);

    // Variable to check if there is an error
    const [errorCheck, setErrorCheck] = useState(false);

    // UseEffect to get data from api
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
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



    // Create variable to store the character's homeworld
    const [world, setWorld] = useState("");

    // UseEffect to get the character's homeworld from the api
    useEffect(() => {
        axios.get(info.homeworld)
            .then((response) => {
                // Store data in world variable
                setWorld(response.data.name);

                console.log(response);
            })
            .catch((err) => {
                // Log error if we get one
                console.log("Error: ", err);
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
                <h1>{info.name}</h1>
                <h3>Hair Color: {info.hair_color}</h3>
                <h3>Height: {info.height}cm</h3>
                <h3>Homeworld: <Link to={`/planets/${world}`}>{world}</Link></h3>
            </div>
        )
    }
}

export default People