const jediName = (firstName, lastName) => {
    const lname = lastName.slice(0, 3);
    const fname = firstName.slice(0,2)  ;
    return (lname + fname);
}

console.log(jediName('joe', 'alex'));

//---------------------------------

const beyond = (num) => {
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
}

console.log(beyond(20));

//------------------------

const decode = (message) => {
    const wordArray = message.split(' ');
    console.log(wordArray);
    const newMessage = [];

    for (let i = 0; i < wordArray.length; i ++) {
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
}

console.log(decode('craft block argon meter bells brown croon droop'));

//---------------------------------------------------

function Tryagain () {
    
}