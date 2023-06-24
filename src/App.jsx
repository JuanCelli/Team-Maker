import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

//Modulos
import { randomMakerTeam } from './components/randomMaker'


import AvatarPlayer from './components/avatar-player'
import AmountPlayerSelect from './components/amount-players-select'
import dataPlayerDefault from "./data/dataPlayerDefault.json"

function App() {
  const [playersList,setPlayersList] = useState([...dataPlayerDefault])



  const [amountPlayers, setAmountPlayer] = useState(5)
  const [Players,setPlayers] = useState(playersList.slice(0,amountPlayers*2))
  const [FieldPlayer,setFieldPlayer] =useState(Players.slice(1,-1))
  const [Goalkeepers,setGoalkeepers] = useState([Players[0],Players[Players.length-1]])
  const [FieldPlayerTeam1,setFieldPlayerTeam1] = useState(FieldPlayer.slice(0,amountPlayers-1))
  const [FieldPlayerTeam2,setFieldPlayerTeam2] = useState(FieldPlayer.slice(amountPlayers-1,FieldPlayer.length))

  


  const handleChangeAmountPlayers = (event) => {
    const newAmountPlayers = parseInt(event.target.value, 10);
    const newPlayers = playersList.slice(0, newAmountPlayers * 2);
    const newFieldPlayer = newPlayers.slice(1, -1);
    const newGoalkeepers = [newPlayers[0], newPlayers[newPlayers.length - 1]];
    const newFieldPlayerTeam1 = newFieldPlayer.slice(0, newAmountPlayers - 1);
    const newFieldPlayerTeam2 = newFieldPlayer.slice(newAmountPlayers - 1, newFieldPlayer.length);
  
    setAmountPlayer(newAmountPlayers);
    setPlayers(newPlayers);
    setFieldPlayer(newFieldPlayer);
    setGoalkeepers(newGoalkeepers);
    setFieldPlayerTeam1(newFieldPlayerTeam1);
    setFieldPlayerTeam2(newFieldPlayerTeam2);

    console.log(amountPlayers,Players,FieldPlayer,Goalkeepers,FieldPlayerTeam1,FieldPlayerTeam2)
  };

  const handleMakeRandom = () =>{

    const newPlayers = [...randomMakerTeam(Players,amountPlayers,[])];
    const newFieldPlayer = newPlayers.slice(1, -1);
    const newGoalkeepers = [newPlayers[0], newPlayers[newPlayers.length - 1]];
    const newFieldPlayerTeam1 = newFieldPlayer.slice(0, amountPlayers - 1);
    const newFieldPlayerTeam2 = newFieldPlayer.slice(amountPlayers - 1, newFieldPlayer.length);

    setPlayers(newPlayers);
    setFieldPlayer(newFieldPlayer);
    setGoalkeepers(newGoalkeepers);
    setFieldPlayerTeam1(newFieldPlayerTeam1);
    setFieldPlayerTeam2(newFieldPlayerTeam2);
  }


  const handleChangeAvatar = (id,name,value) =>{
    playersList.forEach((item) => {
      if (item.id === id) {
        item[name] = value;
        console.log(item)
      }
    });
  }


  return (
    <>
      <header className='header-container'>
        <div className='header-logo-container'></div>
        <div className='navbar-container'>
          <ul className='navbar-items'>
            <li className='navbar-item'>
                <AmountPlayerSelect amountPlayers={amountPlayers} onChangeFunction={handleChangeAmountPlayers}/>
            </li>
            <li className='navbar-item'><button onClick={handleMakeRandom}>Aleatorio</button></li>
            <li className='navbar-item'>Criterio de formacion</li>
          </ul>
        </div>
      </header>

      <main>
        <div className='benchs'>
          <section className='bench bench1'></section>
          <section className='bench bench2'></section>
        </div>

        <section className='panel-team panel-team1'></section>
        <div className='soccer-field'>
          <div className='soccer-field-half soccer-field-half1'>
            <div className='goalpost goalpost1'>
              <AvatarPlayer key={Goalkeepers[0].id} id={Goalkeepers[0].id} name={Goalkeepers[0].name} lastName={Goalkeepers[0].lastName} score={Goalkeepers[0].score} gender={Goalkeepers[0].gender} onChange={handleChangeAvatar}/>
            </div>
            <div className='soccer-field-players'>
              {FieldPlayerTeam1.map((player)=>(
                <AvatarPlayer key={player.id} id={player.id} name={player.name} lastName={player.lastName} score={player.score} gender={player.gender} onChange={handleChangeAvatar}/>
              ))}
            </div>
          </div>
          <div className='soccer-field-half soccer-field-half2'>
            <div className='soccer-field-players'>
             {FieldPlayerTeam2.map((player)=>(
                <AvatarPlayer key={player.id} id={player.id}  name={player.name} lastName={player.lastName} score={player.score} gender={player.gender} onChange={handleChangeAvatar}/>
              ))}
            </div>
            <div className='goalpost goalpost2'>
              <AvatarPlayer key={Goalkeepers[1].id} id={Goalkeepers[1].id} name={Goalkeepers[1].name} lastName={Goalkeepers[1].lastName} score={Goalkeepers[1].score} gender={Goalkeepers[1].gender} onChange={handleChangeAvatar}/>
            </div>    
          </div>
         
     
        </div>
        <section className='panel-team panel-team2'></section>
      </main>



      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App


