
// export function averageMaker(PlayersListExternal,amountPlayers,combinations = [],currentCombination = []){
//     const currentCombination1 = [currentCombination]
//     const PlayersList = [...PlayersListExternal]

//     if(currentCombination.length===amountPlayers){
//         combinations.push(currentCombination1.concat(PlayersList))
//         return
//     }

//     for (let index = 0; index < PlayersList.length; index++) {
//         currentCombination1.push(PlayersList[index])
//         PlayersList.splice(index,1)
//         averageMaker(PlayersList,amountPlayers,combinations1,currentCombination)
//     }

//     return combinations
// }
function averageMaker(players, teamSize, startIndex = 0, currentCombination = [], allCombinations = []) {


    if (currentCombination.length === teamSize) {
        const otherTeam = players.filter((element)=>!currentCombination.includes(element))
        const bothTeams = currentCombination.concat(otherTeam)
        allCombinations.push(bothTeams);
        return;
    }
    
    for (let i = startIndex; i < players.length; i++) {
        const currentPlayer = players[i];
        averageMaker(players, teamSize, i + 1, [...currentCombination, currentPlayer], allCombinations);
    }
    
    return allCombinations
}




function compareCombinarios(currentBestMatchTeam,currentCombination,teamSize){
    function compareAverageTeams(combination,teamSize){
        function calcAverageTeam(arrayTeam,teamSize){
            const sumTeam = arrayTeam.reduce((accumulator,element)=>accumulator+element.score,0)
            return (sumTeam/teamSize)
        }

        if(combination.length!==teamSize){
            const team1 = combination.slice(0,teamSize)
            const team2 = combination.slice(teamSize,combination.length)
            
            const avgTeam1 = calcAverageTeam(team1,teamSize)
            const avgTeam2 = calcAverageTeam(team2,teamSize)
    
            return Math.abs(avgTeam1-avgTeam2)
        }
    }

    if(compareAverageTeams(currentBestMatchTeam,teamSize)>compareAverageTeams(currentCombination,teamSize)){
        return true
    }
}

export function map(players,teamSize){
    const allCombinations = averageMaker(players, teamSize)

    let bestMatchTeam = allCombinations[0]

    for (let i = 0; i < allCombinations.length; i++) {
        if(compareCombinarios(bestMatchTeam, allCombinations[i], teamSize)){
            bestMatchTeam = allCombinations[i]
        }
    }

    return bestMatchTeam
}




