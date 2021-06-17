// Game states
// "WIN" - player has defeated all enemy robots
//  * fight all robots
//  * defeat each robot
// "LOSE" - player health is zero or less

// PLAYER STATS
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//  ENEMY STATS
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//////////////////////

// FIGHT FUNCTION
var fight = function (enemyName) {
  while (enemyHealth > 0 && playerHealth > 0) {
    // ask player if they'd like to fight or skip
    var fightPrompt = window.prompt(
      "Would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player picks skip confirm and then stop the loop
    if (fightPrompt === "skip" || fightPrompt === "SKIP") {
      //confirm player skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye.");
        // subtract money
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy health
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " remaining."
    );

    // check enemy health
    if (enemyHealth <= 0) {
      window.alert(enemyName + "has died!");

      // award player money for winning and leave while loop since enemy is dead
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player health
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " remaining."
    );

    // check player health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};
for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    // let player know what round they are in
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before new fight
    enemyHealth = 50;

    debugger;

    //pass the pickedEnemyName variables value in the fight function
    fight(enemyNames[i]);
  }
}

// fight();
