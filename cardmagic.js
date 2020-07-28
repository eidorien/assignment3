function magicCard(name, redCost, blueCost, greenCost, whiteCost, blackCost) {

    this.name = name;
    this.redCost = redCost;
    this.blueCost = blueCost;
    this.greenCost = greenCost;
    this.whiteCost = whiteCost;
    this.blackCost = blackCost;
    this.totalCost = function () {
        return this.redCost + this.blueCost + this.greenCost + this.whiteCost + this.blackCost;
    }
}

var silence = new magicCard('silence', 0, 0, 0, 2, 0);
var brainstorm = new magicCard('brainstorm', 0, 1, 0, 0, 0);

console.log('the cost of ' + silence.name + ' is equal to ' + silence.totalCost() + ' mana');