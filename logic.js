


function Results() {
    let dragonMoney = prompt("Dragon Bet Amounts....")
    let tigerMoney = prompt("Tiger Bet Amounts....")

    if (dragonMoney == tigerMoney) {
        document.getElementById("dragonbox").innerHTML =  "<h1>Match Tie</h1>"
    }

    else if (dragonMoney > tigerMoney) {
        document.getElementById("dragonbox").innerHTML =  "<h1> Tiger Winner</h1>"
    }

    else {
        document.getElementById("dragonbox").innerHTML =  "<h1>Dragon Winner</h1>"
    }
}