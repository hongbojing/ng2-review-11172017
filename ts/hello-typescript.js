var BirdWhisperer = /** @class */ (function () {
    function BirdWhisperer(message) {
        this.chirping = message;
    }
    BirdWhisperer.prototype.chirp = function () {
        return 'Ah~ oh~ ' + this.chirping;
    };
    return BirdWhisperer;
}());
var birdWhisperer = new BirdWhisperer('coo-coo-coo...hello');
document.body.innerHTML = birdWhisperer.chirp();
var message = "Hello world";
console.log(message);
var num = 12;
console.log(num);
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("hello world!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
var Human = /** @class */ (function () {
    function Human(whatFood) {
        this.food = whatFood;
    }
    Human.prototype.eat = function () {
        console.log("I am eating " + this.food);
    };
    return Human;
}());
var person = new Human('cheesecake');
person.eat();
//# sourceMappingURL=hello-typescript.js.map