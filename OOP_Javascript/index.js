//Q.1 Create a Basic Javascript Object
let dog = {
    name: "choke",
    numLegs: 4
};
//Q.2 Use Dot Notation to Acess the Properties of an Object
let dog = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dog.name);
  console.log(dog.numLegs);
//Q.3 Create a Method on an Object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => {
      
      return `This dog has ${dog.numLegs} legs.`;
    }
  };
  
  console.log(dog.sayLegs());
//Q.4 Make Code More Reusable with the this Keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();
//Q.5 Define a Contructor function
function Dog() {
    this.name = "Choke";
    this.color = "black";
    this.numLegs = 4;
}
//Q.6 Use a Contructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog();
//Q.7 Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  // Only change code below this line
  let myHouse = new House(4);
  
  myHouse instanceof House;
//Q.8 Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for(let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  
  }
// Q.9 Use a Prototype Properties to Reduce Duplicate code
function Dog(name) {
    this.name = name;
    
  }
  Dog.prototype.numLegs = 4;

  
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");
//Q.10 Iterate Over All Properties
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }
//Q.11 Understand the Constructor Properties
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
      if(candidate.constructor === Dog) {
        return true;
      } return false;
  }
//Q.12 Change the Prototype to a New Object
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs : 4,
    eat: () => {
      console.log("nom nom nom");
    },
    describe : () => {
      console.log("My name is" + Dog.name);
    }
  };
  let choke = new Dog("Choke")
  console.log(choke);
  console.log(choke.numLegs);
  console.log(choke.eat());
  console.log(choke.describe())
//Q.13 Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor : Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  let choke = new Dog("Choke");
  console.log(choke.describe())

//Q.14 Understand Where an Object's Prototype Comes From 

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs : 4,
    color : black
  }
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  
  Dog.prototype.isPrototypeOf(beagle)

//Q.15 Understand the Protytype Chain
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);

//Q.16 Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
    
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
   
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function () {
      console.log('nom nom nom');
    }
  
  };
  
  let shorthair = new Cat("noice");

//Q.17 Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
duck.prototype = {
  numLegs : 4,
}
console.log(duck.constructor)

//Q.18 Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

//Q.19 Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor =  Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();
//before bird has constructor with a value Bird, it will return Animal as its constructor;

//Q.20 Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
}


// Only change code above this line

let beagle = new Dog();

//Q.21 Override Inherited Methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function () {return "Alas, this is a flightless bird."}


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

//Q.22 Use a Mixin to Add Common Behaviors Betweeen Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  
  let glideMixin = function(obj) {
    obj.glide = function() {
      return 'glideeee';
    }
  }
  
  glideMixin(bird);
  glideMixin(boat);

//Q.23 Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    let weight = 15;
    this.getWeight = function() {
      return weight;
    }
  
  }
  // This make the weight variable to be scoped in the function only

  //Q.24 Understand the Immediately Invoked Function Expression (IIFE)

  (function () {
    console.log("A cozy nest is ready");
  })()
  //this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately

//Q.24 Use an IIFE to Create a Module

let funModule = (function () {
    return {
      isCuteMixin : function(obj) {
        obj.isCute = function() {
          return true;
        }
      },
      singMixin : function(obj) {
        obj.sing = function() {
          return true
        }
      }
    }
  })();
  
  
  