import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const SearchBar = () => {
// Variables to hold form info 
    const [resource, setResource] = useState("planets");
    const [resourceId, setResourceId] = useState(1);

    return (
        <div>
            <div id="search-bar">
                {/* Search For */}
                <div className='search-bar-section'>
                    <label>Search For:</label>
                    <select name="resource" id="search-select" onChange={(e) => setResource(e.target.value)}>
                        <option value="planets">Planets</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="species">Species</option>
                    </select>
                </div>
                {/* ID Input */}
                <div className='search-bar-section'>
                    <label>ID:</label>
                    <input type="number" name="resourceId" id="search-id" onChange={(e) => setResourceId(e.target.value)}/>
                </div>
                {/* Search Button */}
                <Link to={`/${resource}/${resourceId}`}>
                    <button className='submit'>Search</button>
                </Link>
            </div>
        </div>
    )
}

export default SearchBar