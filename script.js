class Uber {
    constructor(distance,rate,waitingperiod){
        this.distance=distance;
        this.rate=rate;
        this.waitingperiod= waitingperiod;
    }
    setDistance(dist){
        this.distance=dist;
    }
    getRideDetails(){
        return(`The distance of the ride ${this.distance} with rate of ${this.rate} with a waiting period is ${this.waitingperiod}`)
}
getPrice(){
let price =(this.distance * this.rate) + (5*this.waitingperiod)
return price;
}
    }

let uber1 = new Uber(500, 25, 8) 
uber1.setDistance(300)
console.log(uber1.getPrice())
console.log(uber1.getRideDetails())

//------------------------------------------------------------------------

class person1 {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  
    setName(name) {
      this.name = name;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
  }
const person1 = new person1('SURYA', 21, 'surya123@example.com');

console.log(person1.getDetails()); 