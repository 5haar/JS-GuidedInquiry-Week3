let name1 = "Spongebob"
let name2 = "Patrick"

if (name1.length > name2.length) {

    console.log(`The name ${name1} is longer than the name ${name2} by ${Number(name1.length) - Number(name2.length)} letters.`);

} else if (name1.length < name2.length) { 

    console.log(`The name ${name2} is longer than the name ${name1} by ${Number(name2.length) - Number(name1.length)} letters.`);

} else if (name1.length = name2.length) {

    console.log(`The name ${name2} is the same length as name ${name1}.`); 

}
