let playerName = "Mario";
let currentLives = 3;
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 45;

let totalCoins = coinsLevel1 + coinsLevel2 + coinsLevel3;
console.log("Tổng số coin của 3 level là: ", totalCoins);

let avgCoins = totalCoins / 3;
console.log("Số coin trung bình là:", avgCoins);

let soDuCoins = totalCoins % 3;
console.log("Số dư Coin khi chia tổng số coin cho 3 là: ", soDuCoins);