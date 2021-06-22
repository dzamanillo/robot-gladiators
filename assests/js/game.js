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
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy health with random damage
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);

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

    // remove player health with random damage
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
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

//Start Game Function
var startGame = function () {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      // let player know what round they are in
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before new fight
      enemyHealth = randomNumber(40, 60);

      // debugger;

      //pass the pickedEnemyName variables value in the fight function
      fight(pickedEnemyName);
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

// End Game
var endGame = function () {
  // if player wins
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// Shop Function
var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        playerHealth = playerHealth + 20;
        playerMoney = Math.max(0, playerMoney - 7);
      } else {
        window.alert(
          "You don't have enough money! You have " + playerMoney + " dollars."
        );
      }
      break;

    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars");
        playerAttack = playerAttack + 6;
        playerMoney = Math.max(0, playerMoney - 7);
      } else {
        window.alert(
          "You don't have enough money! You have " + playerMoney + " dollars."
        );
      }
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

// Random number function
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

startGame();
