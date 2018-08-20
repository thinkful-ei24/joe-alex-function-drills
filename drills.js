function createGreeting(name, age) {
  const yob = getYearofBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old
    I was born in ${yob}  
  `;
}

function getYearofBirth(age) {
  return 2018 - age;
}

const greeting1 = createGreeting('alex', 23);
console.log(greeting1);
