function createGreeting(name, age) {
  const yearOfBirth = 2018 - age;
  return `Hi, my name is ${name} and I'm ${age} years old
    I was born in ${yearOfBirth}  
  `;

}

const greeting1 = createGreeting('alex', 23);
console.log(greeting1);
