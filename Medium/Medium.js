let message = window.prompt("What is your message?");

if (message == message.toUpperCase()) {
    console.log(`You are yelling, please lower your tone!`);
} else if (message == message.toLowerCase()) {
    console.log(`You are whispering, please speak a little louder...`);
} else {
    console.log(`You are speaking in a normal voice.`);
}
