import Web3 from 'web3/dist/web3.min.js';

export default async function GetENSInfo(value){
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const ensOwner = await web3.eth.ens.getOwner(`${value}.eth`);
    const ensResolver = await web3.eth.ens.getResolver(`${value}.eth`);

    console.log(ensResolver)

    const ensInfo = {
        ensOwner : ensOwner,
        ensResolver : ensResolver,
    };
    
    return ensInfo;
};