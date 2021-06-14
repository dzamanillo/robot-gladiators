var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

var fight = function () {
  window.alert("Welcome to Robot Gladiators!"); //Alert start
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
};

fight();
