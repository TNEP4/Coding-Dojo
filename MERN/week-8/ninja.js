//  Create a Ninja class  
//  add an attribute: name  
//  add an attribute: health  
//  add a attribute: speed - give a default value of 3  
//  add a attribute: strength - give a default value of 3  
//  add a method: sayName() - This should log that Ninja's name to the console  
//  add a method: showStats() - This should show the Ninja's name, strength, speed, and health.  
//  add a method: drinkSake() - This should add +10 Health to the Ninja

class ninja {
    constructor (name, health, speed = 3, strength = 3){
      this.name = name;
      this.health = health;
      this.speed = speed;
      this.strength = strength;
    }
  
    sayName(){
      console.log("Ninjas name is: " + this.name);
    }
  
    showStats(){
      console.log("Stats for: " + this.name);
      console.log("Health: " + this.health);
      console.log("Speed: " + this.speed);
      console.log("Strength: " + this.strength);
    }
  
    drinkSake(){
      this.health += 10;
      console.log(this.name + " just drank sake and his health is now: " + this.health);
    }
  }
  
  console.log("\n  Creating Bob");
  const ninja1 = new ninja("Bob", 10);
  ninja1.sayName();
  ninja1.showStats();
  ninja1.drinkSake();
  // console.log(ninja1);
  
  console.log("\n  Creating Billy");
  const ninja2 = new ninja("Billy", 15, 5, 7);
  ninja2.sayName();
  ninja2.showStats();
  ninja2.drinkSake();
  // console.log(ninja2);