import { useState } from "react";
import "./stylesheets/display.css";
import Search from "./Components/Search";
import GetENSInfo from "./Components/GetENSInfo";
import ENSDisplay from "./Components/ENSDisplay";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [ensInfo, setENSInfo] = useState({});

  async function handleSearch(value){
    if(value.length < 3){
      alert("Error - Domains can not be less than 3 characters");
    }
    else{
      setSearchValue(value);
      setENSInfo(await GetENSInfo(value));
    };
  };

  return (
    <div className="App">
      <h1 className="appHeader">ENS Checker</h1>
      <Search handleSearch = {handleSearch}/>
      <ENSDisplay searchValue = {searchValue} ensInfo = {ensInfo}/>
    </div>
  );
};