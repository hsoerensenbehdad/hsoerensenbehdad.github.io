let pgOne, sgOne, sfOne, pfOne, cOne, benchOne;
let pgTwo, sgTwo, sfTwo, pfTwo, cTwo, benchTwo;
let team1;
let team2;

const teamPlayers = {
    "Boston Celtics": [
        { name: "Jrue Holiday", scoringAbility: 0.8 },
        { name: "Derrick White", scoringAbility: 0.75 },
        { name: "Jaylen Brown", scoringAbility: 0.8 },
        { name: "Jayson Tatum", scoringAbility: 1.1 },
        { name: "Kristaps Porzingis", scoringAbility: 1 }
    ],
    "Indiana Pacers": [
        { name: "Tyrese Haliburton", scoringAbility: 1 },
        { name: "D", scoringAbility: 0.78 },
    ],
};

function teamOne() {
    let team1 = document.getElementById("team1").value;

    pgOne = Math.floor(Math.random() * 15) + 9;
    console.log("Point guard's points = " + pgOne);

    sgOne = Math.floor(Math.random() * 25) + 11;
    console.log("Shooting guard's points = " + sgOne);

    sfOne = Math.floor(Math.random() * 23) + 8;
    console.log("Small forward's points = " + sfOne);

    pfOne = Math.floor(Math.random() * 18) + 7;
    console.log("Power forward's points = " + pfOne);

    cOne = Math.floor(Math.random() * 15) + 6;
    console.log("Center's points = " + cOne);
    benchOne = Math.floor(Math.random() * 15) + 11;
    console.log("The bench's points = " + benchOne);

    let teamOne = pgOne + sgOne + sfOne + pfOne + cOne + benchOne;
    console.log(team1+ "'s total score = " + teamOne);
    
    return { teamOne, pgOne, sgOne, sfOne, pfOne, cOne, benchOne };
}

function teamTwo() {
    pgTwo = Math.floor(Math.random() * 17) + 9;
    console.log("Point guard's points = " + pgTwo);


    sgTwo = Math.floor(Math.random() * 23) + 8;
    console.log("Shooting guard's points = " + sgTwo);

    sfTwo = Math.floor(Math.random() * 19) + 8;
    console.log("Small forward's points = " + sfTwo);

    pfTwo = Math.floor(Math.random() * 24) + 7;
    console.log("Power forward's points = " + pfTwo);

    cTwo = Math.floor(Math.random() * 14) + 6;
    console.log("Center's points = " + cTwo);

    benchTwo = Math.floor(Math.random() * 15) + 11;
    console.log("The bench's points = " + benchTwo);

    let teamTwo = pgTwo + sgTwo + sfTwo + pfTwo + cTwo + benchTwo;
    console.log(team2 + "'s total score = " + teamTwo);

    return { teamTwo, pgTwo, sgTwo, sfTwo, pfTwo, cTwo, benchTwo };
}

function boxScore() {
    let team1 = document.getElementById("team1").value;
    let team2 = document.getElementById("teamTwoName").value;
    const resultScoreElement = document.getElementById("resultScore");
    resultScoreElement.textContent = `
        ${team1}:
        PG: ${pgOne}, SG: ${sgOne}, SF: ${sfOne}, PF: ${pfOne}, C: ${cOne}, Bench: ${benchOne}, Total: ${pgOne + sgOne + sfOne + pfOne + cOne + benchOne}
        
        ${team2}:
        PG: ${pgTwo}, SG: ${sgTwo}, SF: ${sfTwo}, PF: ${pfTwo}, C: ${cTwo}, Bench: ${benchTwo}, Total: ${pgTwo + sgTwo + sfTwo + pfTwo + cTwo + benchTwo}
    `;
}

function calculateWinner() {
    let team1 = document.getElementById("team1").value;
    let team2 = document.getElementById("teamTwoName").value;

    const scoreTeamOne = teamOne();
    const scoreTeamTwo = teamTwo();

    const resultElement = document.getElementById("result");

    if (scoreTeamOne.teamOne > scoreTeamTwo.teamTwo) {
        resultElement.textContent = team1 + " won!";
    } else if (scoreTeamOne.teamOne < scoreTeamTwo.teamTwo) {
        resultElement.textContent = team2 + " won!";
    }
}

boxScore();
calculateWinner();
