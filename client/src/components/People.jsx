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
                // Temporarily set the world variable to empty
                setWorld("");
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
    const [worldId, setWorldId] = useState("");

    // UseEffect to get the character's homeworld from the api
    useEffect(() => {
        axios.get(`${info.homeworld}`)
            .then((response) => {
                // Store data in world variable
                setWorld(response.data.name);
                // Log the world info
                console.log(response);
                // Get id of the world
                setWorldId(getWorldId(info.homeworld));
            })
            .catch((err) => {
                // Log error if we get one
                console.log("Error: ", err);
            })
    }, [info]);

    // Function to get the world id
    const getWorldId = (world) => {
        let idx = 0;

        for(let i = world.length - 2; i >= 0; i--) {
            if(world[i] == '/') {
                idx = i;
                break;
            }
        }

        let newId = world.slice(idx + 1, world.length -1);
        console.log(idx);
        console.log(newId);
        return newId;
    }

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
                <h3>Homeworld: <Link to={`/planets/${worldId}`}>{world}</Link></h3>
            </div>
        )
    }
}

export default People