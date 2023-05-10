import React, { useState } from 'react'
import axios from 'axios'

const SearchBar = () => {
    // Variable to hold the information from the api
    const [info, setInfo] = useState([]);

    // Variables to hold form info
    const [resource, setResource] = useState("");
    const [resourceId, setResourceId] = useState(1);

    // Variable to check if the button has been clicked
    let [buttonClicked, setButtonClicked] = useState(false);

    // Function to run when form has been submitted
    const handleSubmit = (e) => {
        // Prevent default button behavior
        e.preventDefault();
        // Create variable to hold form info
        const formInfo = {resource, resourceId}
        // UseEffect to get data from api
        useEffect(() => {
            axios.get(`https://swapi.dev/api/${resource}/${resourceId}`)
            .then((response) => {
                // Log data to check formatting
                console.log(response);
            })
            .catch((err) => {
                // Log error if we get one
                console.log("Error: ", err);
            })
        }, [buttonClicked]);
    }

    return (
        <div>
            <div id="search-bar">
                {/* Search For */}
                <div className='search-bar-section'>
                    <label>Search For:</label>
                    <select name="resource" id="search-select" onChange={(e) => setResource(e.target.value)}>
                        <option value="">people</option>
                    </select>
                </div>
                {/* ID Input */}
                <div className='search-bar-section'>
                    <label>ID:</label>
                    <input type="number" name="resourceId" id="search-id" onChange={(e) => setResourceId(e.target.value)}/>
                </div>
                {/* Search Button */}
                <button onClick={handeSubmit}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar