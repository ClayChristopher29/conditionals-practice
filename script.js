// conditionals Practice 2
// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.

var likesDogs = true
if(likesDogs){
    console.log("Good Choice, Cats are weird");
} else{
    console.log("I mean cool, but cats are still wack")
}
// Practice 3
// Declare a variable called birthYear and set it equal to your birth year.
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
// Try changing the value of birthYear and see what happens.

var birthyear = 1986
if (birthyear===1986){
    console.log("You are a late model millenal")
} else(
    console.log("You are either a Gen-xer, or a boomer")
)
// Practice 4
// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.

// Write a conditional that checks for the following:

// If the person's preferred language is English, print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// // If their preferred language is French, print "Bonjour, [name]!" to the console.

var newPerson ={
    name: "Carl",
    preferredLanguage: "English"
}
if(newPerson.preferredLanguage==="English"){
    console.log(
        "Hello,Carl"
    )
} else if(newPerson.preferredLanguage==="Spanish"){
    console.log(
        "Hola, Carl"
    )
} else if(newPerson.preferredLanguage==="French"){
    console.log("Bonjour, Carl")
}

// Practice5
// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
// A variable called isHungry that stores a boolean representing whether or not you're hungry
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them.
var time = ("2:00pm")
var isHungry= true

if(time === "1:00pm" && isHungry){
    console.log("Grab some Lunch YO")
} else if(
    time==="5:00pm"&&isHungry){
        console.log("Time for some wicked sweet dinner YO")
    }
    else if(time==="2:00pm"||isHungry){
        console.log("You can wait, I ain't made of money")
    } else if(time==="3:00pm"||isHungry){
        console.log("Hold your phone, you can still wait")
    } else if(time==="4:00pm"||isHungry){
        console.log(
            "You ask we one more time and we are eating bread and water for dinner, test me"
        )
    }
