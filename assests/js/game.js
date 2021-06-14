var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack, playerMoney);

console.log(playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

var fight = function () {
  window.alert("Welcome to Robot Gladiators!"); //Alert start
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );
  if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack; //player attacks enemy
    console.log(
      //log enemy after attack
      playerName +
        " attatcked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " left.");
    }

    playerHealth = playerHealth - enemyAttack; //enemy attacks player
    console.log(
      //log player after attack
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    if (playerHealth <= 0) {
      window.prompt(playerName + " has died!");
    } else {
      window.prompt(
        playerName + " now has " + playerHealth + " health remaining."
      );
    }
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip === true) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      playerMoney = playerMoney - 2;
      console.log(playerName + " now has " + playerMoney + " remaining.");
    } else {
      fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

fight();
