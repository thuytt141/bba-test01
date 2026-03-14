// Bài 1

const characters = [
    { name: "Mario", level: 10, health: 600 },
    { name: "Luigi", level: 12, health: 350 },
    { name: "Peach", level: 8, health: 500 },
    { name: "Yoshi", level: 7, health: 200 }
];
function createCharacters(characters) {

    const charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });

    const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);
    console.log(possibleWinners);

}

createCharacters(characters);

//Bài 2

const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
];
function createLeaderboard(players) {
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    sortedPlayers.forEach((player, index) => {

        let medal = "";

        if (index === 0) medal = "🥇 ";
        else if (index === 1) medal = "🥈 ";
        else if (index === 2) medal = "🥉 ";

        console.log(
            `${medal}${index + 1}. ${player.name} - ${player.score.toLocaleString()} pts`
        );

    });

}

createLeaderboard(players);