import './chatelement.css'

function chatelement(sender,messege){
    return(
        <div class='chatelements'>
            <div class='chatby'>
                {sender}
            </div>
            <div class='chatmessege'>
                {messege}
            </div>
        </div>
    )
}

export {chatelement}