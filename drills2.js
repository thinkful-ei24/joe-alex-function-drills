const jediName = (firstName, lastName) => {
  const lname = lastName.slice(0, 3);
  const fname = firstName.slice(0, 2);
  return lname + fname;
};

console.log(jediName('joe', 'alex'));

//---------------------------------

const beyond = num => {
  if (!isFinite(num)) {
    return 'And Beyond';
  }

  if (isFinite(num) && num > 0) {
    return 'To Infinity';
  }

  if (isFinite(num) && num < 0) {
    return 'To negative infinity';
  }

  if (num === 0) {
    return 'Staying Home';
  }
};

console.log(beyond(20));

//------------------------

const decode = message => {
  const wordArray = message.split(' ');
  console.log(wordArray);
  const newMessage = [];

  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i];
    const firstChar = word.charAt(0);

    if (firstChar === 'a') {
      newMessage.push(word.charAt(1));
    } else if (firstChar === 'b') {
      newMessage.push(word.charAt(2));
    } else if (firstChar === 'c') {
      newMessage.push(word.charAt(3));
    } else if (firstChar === 'd') {
      newMessage.push(word.charAt(4));
    } else {
      newMessage.push(' ');
    }
  }

  return newMessage.join('');
};

console.log(decode('craft block argon meter bells brown croon droop'));

//---------------------------------------------------

function howManyDays(month, leapYear) {
  switch (month) {
  case 'January':
    return 'January has 31 days';
    break;
  case 'February':
    if (leapYear) {
      return 'February has 29 days';
    } else {
      return 'Februay has 28 days';
    }
  case 'March':
    return 'March has 31 days';
    break;

  case 'April':
    return 'April has 30 days';
    break;
  case 'May':
    return 'May has 31 days';
    break;
  case 'June':
    return 'June has 30 days';
    break;
  case 'July':
    return 'July has 31 days';
    break;
  case 'August':
    return 'August has 31 days';
    break;
  case 'September':
    return 'September has 30 days';
    break;
  case 'October':
    return 'October has 31 days';
    break;
  case 'November':
    return 'November has 30 days';
    break;
  case 'December':
    return 'December has 31 days';
    break;
  default:
    throw new Error('provide valid month');
  }
}

try {
  const manyDays = howManyDays('giraffes', true);
  console.log(manyDays);
} catch (e) {
  console.log(e.message);
}

//----------------------------------------------------------

const rps = (num) => {
    if (num !== 1 && num !== 2 && num !== 3) {
        throw new Error('Choose a valid Number')
    }
    const randomNo = Math.floor(Math.random() * 3) + 1;
    console.log(`computer has ${randomNo}`)

    if (num === 1 && randomNo === 1) {
        return "It's a tie"
    } else if (num === 1 && randomNo === 2) {
        return "You lost"
    } else if (num === 1 && randomNo === 3) {
        return "You win"
    } else if (num === 2 && randomNo === 1) {
        return "You win"
    } else if (num === 2 && randomNo === 2) {
        return "It's a tie"
    } else if (num === 2 && randomNo === 3) {
        return "You lost"
    } else if (num === 3 && randomNo === 1) {
        return "You lost"
    } else if (num === 3 && randomNo === 2) {
        return "You win"
    } else if (num === 3 && randomNo === 3) {
        return "It's a tie"
    }
}

try {
    const playGame = rps(2);
    console.log(playGame);
} catch(e) {
    console.error(e.message)
}

//-----------------------------------END--