import Web3 from 'web3/dist/web3.min.js';
import GetTokenID from "./GetTokenID";

export default async function GetENSInfo(value){
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const ensOwner = await web3.eth.ens.getOwner(`${value}.eth`);
    const ensResolver = await web3.eth.ens.getResolver(`${value}.eth`);
    const tokenID = await GetTokenID(value);

    const ensInfo = {
        ensName : value,
        ensOwner : ensOwner,
        ensResolver : ensResolver,
        ensTokenID: tokenID,
    };
    
    return ensInfo;
};