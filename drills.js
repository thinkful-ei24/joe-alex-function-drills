function createGreeting(name, age) {
  const yob = getYearofBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old
    I was born in ${yob}  
  `;
}

function getYearofBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }

  return 2018 - age;
}

try {
  const greeting1 = createGreeting('alex', -23);
  console.log(greeting1);
} catch (e) {
  console.log(e.message);
}
