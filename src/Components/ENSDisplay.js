export default function ENSDisplay(props){
    function isOwned(){
        if(props.ensInfo.ensOwner === "0x0000000000000000000000000000000000000000"){
            return <div className="results">
                <div className="registryStatus">{props.ensInfo.ensName}.eth: <p className="statusUnregistered">Not Registered</p></div>
                <img key={props.ensInfo.ensName} className="validityImage" src="https://i.ibb.co/b62cdkB/green-Check.png" alt="A blue checkmark"></img>
                <div>
                    <a href={`https://app.ens.domains/name/${props.ensInfo.ensName}.eth`} target="_blank" rel="noreferrer">
                        <img src="https://464911102-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/collections%2F2TjMAeHSzwlQgcOdL48E%2Ficon%2FKWP0gk2C6bdRPliWIA6o%2Fens%20transparent%20background.png?alt=media&token=bd28b063-5a75-4971-890c-97becea09076" className="linkLogo" alt="ens logo"></img>
                    </a>
                </div>
            </div>
        }
        else if(props.ensInfo.ensOwner === null || props.ensInfo.ensOwner === undefined){
            return null;
        }
        else{
            return <div className="results">
                <div className="registryStatus">{props.ensInfo.ensName}.eth:<p className="statusRegistered">Registered</p></div>
                <img key={props.ensInfo.ensName} className="validityImage" src="https://i.ibb.co/7ptyPRg/redCross.png" alt="A red cross (X)"></img>
                <p><a className="ownerAddress" href={`https://etherscan.io/address/${props.ensInfo.ensOwner}`} target="_blank" rel="noreferrer">Owner: {props.ensInfo.ensOwner}</a></p>
                <div className="resultLinks">
                    <a href={`https://app.ens.domains/name/${props.ensInfo.ensName}.eth`} target="_blank" rel="noreferrer">
                        <img src="https://464911102-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/collections%2F2TjMAeHSzwlQgcOdL48E%2Ficon%2FKWP0gk2C6bdRPliWIA6o%2Fens%20transparent%20background.png?alt=media&token=bd28b063-5a75-4971-890c-97becea09076" className="linkLogo" alt="ens logo"></img>
                    </a>
                    <a href={`https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/${props.ensInfo.ensTokenID}`} target="_blank" rel="noreferrer">
                        <img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png" className="linkLogo" alt="opensea logo"></img>
                    </a>
                </div>
            </div>
        };
    };

    return <div className="resultsContainer">
        {isOwned()}
    </div>
};