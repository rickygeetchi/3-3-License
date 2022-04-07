import input from 'input';

const usDrivingAge = 16;
const hasLicense = await input.confirm("Do you have your license? :");


const userAge = Number(await input.text("How old are you?"));

if (hasLicense && userAge >= usDrivingAge) {
    console.log("You can drive!");
} else if (hasLicense && userAge < usDrivingAge) {
    console.log("We're talking about a US driver's license, right? How'd you get one?");
}
else {
    console.log("Sorry, you cannont drive.");
}
