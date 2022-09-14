import { useState } from "react";
import "./stylesheets/display.css";
import Search from "./Components/Search";
import GetENSInfo from "./Components/GetENSInfo";
import ENSDisplay from "./Components/ENSDisplay";

export default function App() {
  const [ensInfo, setENSInfo] = useState({});

  async function handleSearch(value){
    if(value.length < 3){
      alert("Error - Domains can not be less than 3 characters");
    }
    else{
      setENSInfo(await GetENSInfo(value));
    };
  };

  return (
    <div className="App">
      <div className="appTranslate">
        <h1 className="appHeader">ENS Checker</h1>
        <Search handleSearch = {handleSearch}/>
        <ENSDisplay ensInfo = {ensInfo}/>
      </div>
    </div>
  );
};