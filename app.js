// Falsy Bouncer

function waffles(arr) {
    var answer = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i]) {
            answer.push(arr[i])
        }
    }
    console.log(answer);
    return answer;
}

waffles([81, 'syrup', false, 'body']);

//

// Chunky Monkey

function funky(poo, size) {
    var paint = [];
    for(var p = 0; p < poo.length; p += size) {

        var pushMe = poo.slice(p, p+size)
        console.log(pushMe)
        paint.push(pushMe);
    }

    return paint;
}

funky(['a', 'b', 'c', 'd'], 2);

//

// Basic JS Object

let double = {
    name: "cheeseBurger",
    patties: 4
};

console.log(double);


// Dot Notation

let skillet = {
    chopper: "Hammie",
    bottle: 9
};

console.log(skillet.chopper, skillet.bottle);


// Method On An Object

let boy = {
    gorilla: "glue",
    duct: "tape",
    
    sayStuff: function() { return "I have " + boy.gorilla + " and " + boy.duct + ".";}
};

boy.sayStuff();
    console.log(boy.sayStuff());


// Make Code More Reusable

let me = {
    yoyo: "Luffy",
    gold: "Nami",
    sayMe: function() {return "I am " + this.yoyo + ".";}
};

console.log(me.sayMe());


// Constructor Function

function Run() {
    this.cook = "Marathon";
    this.color = "blue";
    this.hottie = "Body";
}
console.log(Run);


// Use a Constructor to Create Objects

function hotDog() {
    this.girl = "Charlie";
    this.sauce = "BBQ";
    this.num = 55;
}

let buns = new hotDog();
console.log(buns);


// Extend Constructors to Receive Arguments

function Cow(now, never) {
    this.now = now;
    this.never = never;
    this.legs = 900;
}

let corn = new Cow('joe', 'feller');
    console.log(corn);


// Verify Object with instanceof

function Snacks(numSnacks) {
    this.numSnacks = numSnacks;
}

let mySnacks = new Snacks(5);

mySnacks instanceof Snacks;

console.log(mySnacks);
console.log(mySnacks instanceof Snacks);


// Understand Own Properties

function Lion(party, honey) {
    this.party = party;
    this.honey = honey;
}

let canary = new Lion("Leonardo");
let ownProps = [];

for(let property in canary) {
    if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);


// Use Prototype Properties to Reduce Duplicate

function spongeBob(play) {
    this.play = play;
}

spongeBob.prototype.grow = "2x"

let sandy = new spongeBob("bikini")

console.log(sandy.grow);