export default function ENSDisplay(props){
    function isOwned(){
        if(props.ensInfo.ensOwner === "0x0000000000000000000000000000000000000000"){
            return <div>
                "Not Registered"
            </div>
        }
        else if(props.ensInfo.ensOwner === null || props.ensInfo.ensOwner === undefined){
            return null;
        }
        else{
            return <div>
                "Registered"
            </div>
        }
    }

    return <div>
        ENS Display: {props.ensInfo.ensOwner}
        <a href={`https://app.ens.domains/name/${props.ensInfo.ensName}.eth`} target="_blank" rel="noreferrer">ENS</a>
        {isOwned()}
    </div>
};