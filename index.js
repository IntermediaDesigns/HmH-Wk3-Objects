// Create an array list that stays on screen
const arrayContainer = document.querySelector("#arrayList");

const listInfo = {
       name: "Max",
       money: "0",
       dogs: "0",
       laptops: "0",
}

function render() {
       let listInfoStr = '';
       for (let key in listInfo) {
           listInfoStr += `"${key}": ${listInfo[key]}, `;
       }
       // Remove the trailing comma and space
       listInfoStr = listInfoStr.slice(0, -2);
       arrayContainer.textContent = `{${listInfoStr}}`
};

render();

/*Displays "You need a $100 to buy a dog." under buttons. When you earn money, per each $100, you buy 1 dog and it updates dogs array and decreases money buy $ amount used*/

/*Displays "You don't have a dog, it couldn't of died." After you buy a dog, the dogs array decreases by 1*/

// Adds $100 each click to the money array
       const moneyButton = document.querySelector(".money");
       moneyButton.textContent = "name: " + listInfo.name;
       moneyButton.appendChild(money);

/* Displays "You need $1000 to buy a laptop." under button. When you earn money, per each $1000, you buy 1 laptop and it updates laptops array and decreases money buy $ amount used*/



       




       