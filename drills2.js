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

const decode = (word) => {
    const wordArray = word.split(' ');
    console.log(wordArray);
    const newMessage = [];

    for (let i = 0; i < wordArray.length; i ++) {
        if (wordArray[i].charAt(0) === 'a') {
             newMessage.push(wordArray[i].charAt(1));
        }
    
        if (wordArray[i].charAt(0) === 'b') {
            newMessage.push(wordArray[i].charAt(2));
        }
    
        if (wordArray[i].charAt(0) === 'c') {
            newMessage.push(wordArray[i].charAt(3));
        }
    
        if (wordArray[i].charAt(0) === 'd') {
            newMessage.push(wordArray[i].charAt(4));
        } else {
            newMessage.push(' ');
        }
    }

    return newMessage.join('');
}

console.log(decode('craft block argon meter bells brown croon droop'));

//---------------------------------------------

