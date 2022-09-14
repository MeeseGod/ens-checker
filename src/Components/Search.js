import { useState } from "react";

export default function Search(props){
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event){
        setInputValue(event.target.value);
    };

    return <div className="searchContainer">
        <input type={"text"} placeholder="Search for domain..." onChange={handleInputChange} className="searchBar"></input>
        <button onClick={() => props.handleSearch(inputValue)} className="searchButton">Search</button>
    </div>
};