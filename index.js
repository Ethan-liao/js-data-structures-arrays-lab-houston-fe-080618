// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(fname,lname, age){
  drivers.push(fname)
  drivers.push(lname)
  drivers.push(age)
  return "hello"
}

destructivelyAppendDriver('john','doe', 'age')