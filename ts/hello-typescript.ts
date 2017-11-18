class BirdWhisperer {
    chirping: string;
    constructor(message: string) {
        this.chirping = message;
    }
    chirp() {
        return 'Ah~ oh~ ' + this.chirping;
    }    
}

let birdWhisperer = new BirdWhisperer('coo-coo-coo...hello');
document.body.innerHTML = birdWhisperer.chirp();

var message:string = "Hello world";
console.log(message);

var num:number = 12;
console.log(num);

class Greeting {
    greet():void {
        console.log("hello world!!!");
    }
}

var obj = new Greeting();
obj.greet();

class Human {
    food: string;
    constructor(whatFood: string) {
        this.food = whatFood;
    }
    eat() {
        console.log("I am eating " + this.food);
    }
}

var person = new Human('cheesecake');
person.eat();
