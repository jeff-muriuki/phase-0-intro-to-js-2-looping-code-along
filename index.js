// Code your solutions in this file
function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message)
    }
    return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number) {
    let i = number;   
   
    while (i>=0) {
        console.log(i);
        i--;
    }
}
countDown();