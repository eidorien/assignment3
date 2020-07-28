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

function cardInfo(card, id) {
    var el = document.getElementById(id);
    el.getElementsByClassName('cardName')[0].textContent = card.name;
    el.getElementsByClassName('redCost')[0].textContent = card.redCost;
    el.getElementsByClassName('blueCost')[0].textContent = card.blueCost;
    el.getElementsByClassName('greenCost')[0].textContent = card.greenCost;
    el.getElementsByClassName('whiteCost')[0].textContent = card.whiteCost;
    el.getElementsByClassName('blackCost')[0].textContent = card.blackCost;
    el.getElementsByClassName('totalCost')[0].textContent = 'Total cost: ' + card.totalCost();
}

var silence = new magicCard('Silence', 0, 0, 0, 1, 1);
var brainstorm = new magicCard('Brainstorm', 0, 2, 0, 0, 0);

cardInfo(silence, 'cardNum1');
cardInfo(brainstorm, 'cardNum2');

console.log('the cost of ' + silence.name + ' is equal to ' + silence.totalCost() + ' mana');
console.log('the cost of ' + brainstorm.name + ' is equal to ' + brainstorm.totalCost() + ' mana');