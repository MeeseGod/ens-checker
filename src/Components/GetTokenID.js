export default async function GetTokenID(value){
    const ethers = require('ethers');
    const BigNumber = ethers.BigNumber;
    const utils = ethers.utils;
    const name = value;
    const labelHash = utils.keccak256(utils.toUtf8Bytes(name));
    const tokenId = BigNumber.from(labelHash).toString();

    return tokenId;
}