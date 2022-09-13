export default function ENSDisplay(props){
    function isOwned(){
        if(props.ensInfo.ensOwner === "0x0000000000000000000000000000000000000000"){
            return <div className="results">
                <p>{props.ensInfo.ensName}.eth: Not Registered</p>
                <div className="resultLinks">
                    <a href={`https://app.ens.domains/name/${props.ensInfo.ensName}.eth`} target="_blank" rel="noreferrer">ENS</a>
                </div>
            </div>
        }
        else if(props.ensInfo.ensOwner === null || props.ensInfo.ensOwner === undefined){
            return null;
        }
        else{
            return <div className="results">
                <p>{props.ensInfo.ensName}.eth: Registered</p>
                <p>Owner: {props.ensInfo.ensOwner}</p>
                <div className="resultLinks">
                    <a href={`https://app.ens.domains/name/${props.ensInfo.ensName}.eth`} target="_blank" rel="noreferrer">ENS</a>
                    <a href={`https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/${props.ensInfo.ensTokenID}`} target="_blank" rel="noreferrer">Open Sea</a>
                </div>
            </div>
        };
    };

    return <div className="resultsContainer">
        {isOwned()}
    </div>
};