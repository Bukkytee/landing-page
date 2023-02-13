class Car{
    constructor(brand, model, colour) {
        this.brand = brand;
        this.model = model;
        this.colour = colour;
    }
    register(){
        console.log(this.brand, this.model, 'has been registered')
    }
    deregister(){
        console.log(this.brand, this.model, 'has been deregistered')
    }
};

let carOne = new Car('Toyota', 'Camry', 'green');
let carTwo = new Car('Honda', 'Accord', 'red');

carOne.register();