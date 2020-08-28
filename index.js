const inquirer=require("inquirer")
const fs =require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
// array of questions for user
const questions = [
{
    type:"input",
    message:"what is the title?",
    name:"title"
}, 
{
    type:"input",
    message:"what is the description",
    name:"description"

},
{
    type:"input",
    message:"how do you install your app",
    name:"installation"

},
{
    type:"input",
    message:"what is the app used for",
    name:"usage"
},
{
    type:"input",
    message:"what are the credits",
    name:"credits"
},
{
    type:"list",
    message:"please choose license for your app",
    name:"license",
    choices:["MIT","GPLv3","AGPL"]
},
{
    type:"input",
    message:"who are the contributors to the app?",
    name:"contributing"
},
{
    type:"input",
    message:"how did you input your app",
    name:"tests"

}

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){
        console.log("success")
    })
}

// function to initialize program
function init() {
   inquirer.prompt(questions).then(function(userInput){
       const README=generateMarkdown(userInput)
       writeToFile("./README.md",README)
   })
}

// function call to initialize program
init();
