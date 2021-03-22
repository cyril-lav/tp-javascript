class Human {
  name = 'toto';
  age = 18;

  constructor(name) {
    this.name = name;
  }

  talk(){
    console.log('My name is ' + this.name);

    return this;
  }

  howHold(){
    console.log('My age is ' + this.age);

    return this;
  }
}