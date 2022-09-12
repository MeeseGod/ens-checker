import { useState } from "react";

export default function Search(props){
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event){
        setInputValue(event.target.value);
    };

    return <div className="searchContainer">
        <input type={"text"} placeholder="Search for domain..." onChange={handleInputChange}></input>
        <button onClick={() => props.handleSearch(inputValue)}>Search</button>
        {inputValue}
    </div>
};