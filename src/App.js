import { useState } from "react";
import Search from "./Components/Search";
import GetENSInfo from "./Components/GetENSInfo";
import ENSDisplay from "./Components/ENSDisplay";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [ensInfo, setENSInfo] = useState({});

  async function handleSearch(value){
    setSearchValue(value);
    setENSInfo(await GetENSInfo(value));
  };

  return (
    <div className="App">
      <Search handleSearch = {handleSearch}/>
      <ENSDisplay searchValue = {searchValue} ensInfo = {ensInfo}/>
    </div>
  );
};