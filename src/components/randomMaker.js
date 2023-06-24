
export function randomMakerTeam(PlayersList,amountPlayers,newTeamList){
    const newTeamList1 = [...newTeamList]
    const remaingPlayerList = [...PlayersList]
    // console.log(remaingPlayerList)
    if(remaingPlayerList.length<=amountPlayers){
        return newTeamList1.concat(remaingPlayerList)
    }
    let partition = 1/remaingPlayerList.length
    const numberRandom = Math.random()

    for (let index = 0; index < remaingPlayerList.length; index++) {
        if(partition*index<=numberRandom && numberRandom <partition*(index+1)){
            newTeamList1.push(remaingPlayerList.splice(index,1)[0])
            return randomMakerTeam(remaingPlayerList,amountPlayers,newTeamList1)
        }
    } 
}

