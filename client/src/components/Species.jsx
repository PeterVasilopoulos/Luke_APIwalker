import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Error from "./Error"

const Species = () => {
    // Store variables sent from the route
    const {id} = useParams();

    // Store data retrieved from api
    const [info, setInfo] = useState([]);

    // Variable to check if there is an error
    const [errorCheck, setErrorCheck] = useState(false);

    // UseEffect to get data from api
    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
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

    if(errorCheck) {
        return (
            <div>
                <Error/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>{info.name}</h1>
                <h3>Manufacturer: {info.manufacturer}</h3>
                <h3>Model: {info.model}</h3>
                <h3>Vehicle Class: {info.vehicle_class}</h3>
            </div>
        )
    }
}

export default Species