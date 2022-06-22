class Player {
	constructor(name, totalCoins, status, hasStar) {
		this.name = name;
		this.totalCoins = totalCoins;
		this.status = status;
		this.hasStar = hasStar;
	}
	setName(namePicked) {
		if (namePicked === "Mario" || namePicked === "Luigi") {
			this.name = namePicked;
			let intervalId = setInterval(getEvent, 1000);
			this.print();
		} else {
			return;
		}
	}
	gotHit() {
		if (this.status === "Powered Up") {
			this.status === "Big";
			this.print();
		} else if (this.status === "Big") {
			this.status = "Small";
			this.print();
		} else if (this.status === "Small") {
			this.status = "Dead";
			this.print();
			console.log("Dead");
			clearInterval(runTime);
		}
	}
	gotPowerup() {
		if (this.status === "Small") {
			this.status = "Big";
			this.print();
		} else if (this.status === "Big") {
			this.status = "Powered Up";
			this.print();
		} else if (this.status === "Powered Up") {
			this.hasStar = true;
			this.print();
		}
	}
	addCoin() {
		this.totalCoins++;
	}
	print() {
		console.log(
			`Name: ${this.name}\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}\nStar: ${this.hasStar}`
		);
	}
}

const getRandomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

function getEvent() {
	const num = getRandomNumber(0, 2);
}

let runTime = setInterval(() => {
	player1.print();
	let num = Math.floor(Math.random() * 3);
	console.log(`Random Event(s): ${num}`);
	if (num === 0) {
		player1.gotHit();
	}
	if (num === 1) {
		player1.addCoin();
	}
	if (num === 2) {
		player1.addCoin();
	}
}, 5000);
const player1 = new Player("Luigi", 0, "Big", false);
