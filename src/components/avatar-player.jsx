// import React from 'react';
import React, { useState } from 'react';


function AvatarPlayer(props){
    const [inputName, setinputName] = useState(`${props.name}`);
    const [inputScore, setinputScore] = useState(`${props.score}`);
    const [inputGender, setinputGender] = useState(`${props.gender}`);

    
    const positionWordwithSpaces = inputName.split(" ")
    const positionWord = positionWordwithSpaces.filter((word)=>word!=="")
    if(positionWord[0]!==undefined&&positionWord[1]===undefined){
        positionWord[1]=positionWord[0][1]
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        props.onChange(props.id,name,value);
        if(name==="name"){
            if(name!==undefined){
                setinputName(value)
            }
            else{
                setinputName("Anonimus")
            }
        }
        else if (name==="score"){
            let score = parseFloat(value)
            setinputScore(score);
        }
        else if (name==="gender"){
            setinputGender(value)
        }
      };




    const bgColor = "random"
    
    const urlImg = `https://ui-avatars.com/api/?name=${positionWord[0]}+${positionWord[1]}&background=${bgColor}&color=fff&size=200`

    return <div className="avatar-player">
                <img className="player-img" src={urlImg} alt="player photo" />
                <section className="player-info">
                    <input type='text' name='name' value={inputName} onChange={handleChange} className="player-name"></input>
                    <div className='section-player-score line-info'>
                        <p>Score: </p>
                        <input type="number" min="0" max="5" step="0.1" name='score' value={inputScore} onChange={handleChange} className="player-score player-props" />
                    </div>
                    <div className='section-player-gender line-info'>
                        <p>Gender: </p>
                        <select name='gender' value={inputGender} onChange={handleChange} className='player-props player-gender'>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                </section>
            </div>
}

export default AvatarPlayer