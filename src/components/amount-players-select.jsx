import React, { useState } from 'react';




function AmountSelectPleayers(props){
    const optionsAmount = [5,7]
    const [amountPlayers, setAmountPlayer] = useState(props.amountPlayers);

    const handleChange = (event) => {
        const {value} = event.target
        props.onChangeFunction(event)
        setAmountPlayer(value)
        props.handleChangeAvatar(event)
      };


    return(
        <select value={amountPlayers} onChange={handleChange}>
            {optionsAmount.map(amount=>
                <option key={amount} value={amount} selected>{amount} Jugadores</option>
                )}
        </select>
    )
}

export default AmountSelectPleayers


