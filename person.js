const address = require('./address').address


const persDaten = {
    surname:'Hildt',
    name: 'Eugen',
    age: 18,

    introduceYourself(address){

    console.log('Hello my name is ', this.name, this.surname, ' and I am ', this.age, 'years old')
    console.log('My address is ',address.getaddress())
}} 

persDaten.introduceYourself(address)
