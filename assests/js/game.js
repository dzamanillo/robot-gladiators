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
  //  WELCOMES TO GAME
  window.alert("Welcome to Robot Gladiators!");
  // While Loop to continue fighting one enemy
  while (enemyHealth > 0) {
    //  PROMPT TO FIGHT OR SKIP
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    //  IF PROMPT TO FIGHT, PLAYER ATTACKS ENEMY
    if (promptFight === "fight" || promptFight === "FIGHT") {
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          " attatcked " +
          enemyName +
          ". " +
          enemyName +
          " now has " +
          enemyHealth +
          " health remaining."
      );
      //  MESSAGE AFTER FIGHT WITH ENEMY HEALTH
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " left.");
      }
      //  IF PROPMT TO FIGHT, ENEMY ATTACKS PLAYER
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );
      //  MESSAGE AFFTER FIGHT WITH PLAYER HEALTH
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(
          playerName + " now has " + playerHealth + " health remaining."
        );
      }

      //  IF PROMPT TO SKIP
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      // OPEN CONFIRM WINDOW
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      //  IF SKIP CONFIRMED, ALERT AND TAKE MONEY
      if (confirmSkip === true) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
        console.log(playerName + " now has " + playerMoney + " remaining.");
      }

      //  ELSE FIGHT
      else {
        fight();
      }
    }

    // IF FIGHT SKIP IS INVALID
    else {
      window.alert("You need to choose a valid option. Try again!");
    }
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(enemyNames[i]);
}

// fight();
