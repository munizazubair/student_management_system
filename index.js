#! /usr/bin/env node
import inquirer from "inquirer";
console.log("WELCOME TO COMPUTER COURSES CLASSES! ");
let enrollAns = await inquirer.prompt([
    {
        name: "enroll",
        type: "list",
        message: "Do you want to enroll? ",
        choices: ["yes", "no"],
    },
]);
if (enrollAns.enroll == "yes") {
    let studentName = await inquirer.prompt([
        {
            name: "student",
            type: "input",
            message: "Enter Your Name! ",
        },
    ]);
    let coursesName = await inquirer.prompt([
        {
            name: "courses",
            type: "list",
            message: "Select the course \n By taking these courses, you'll gain valuable skills that can help you pursue a career in web development",
            choices: ["Basic Course", "HTML Course", "CSS Course", "JS Course"],
        },
    ]);
    let basicCourseFees = 5000;
    let htmlCourseFees = 10000;
    let cssCourseFees = 20000;
    let jsCourseFees = 25000;
    if (coursesName.courses == "Basic Course") {
        console.log(`Basic Course Info: They cover basic computer skills, such as using an operating sysytems, navigating the web, and working with basic software applications \n Monthly Course Fee: ${basicCourseFees}`);
    }
    else if (coursesName.courses == "HTML Course") {
        console.log(`HTML COurse Info: In 'Hypertext Marlup Language'you'll learn how to structure web pages and create content. \n Monthly Course Fee: ${htmlCourseFees} `);
    }
    else if (coursesName.courses == "CSS Course") {
        console.log(`CSS Course Info: In 'Cascading Style Sheets' you will learn how to make your web pages visually appealing with control over layout ,colours, fonts, etc \n Monthly Course Fee: ${cssCourseFees}`);
    }
    else if (coursesName.courses == "JS Course") {
        console.log(`JS Course Information: In 'Javascript' you will learn how to add functionality and interactivity to your web pages, making them more dynamic and attractive \n Monthly Course Fee: ${jsCourseFees}`);
    }
    let courseTime = await inquirer.prompt([
        {
            name: "timings",
            type: "list",
            message: "Select Timing",
            choices: ["2pm to 4pm", "5pm to 7pm"],
        },
    ]);
    let course = await inquirer.prompt([
        {
            name: "confirmation",
            type: "list",
            message: "Do you confirm this course?",
            choices: ["Confirm", "Deny"],
        },
    ]);
    if (course.confirmation == "Confirm") {
        console.log("Now, You confirm for the course \n");
    }
    else if (course.confirmation == "Deny") {
        console.log("That's alright, no problem");
    }
    const idNumber = Math.floor(Math.random() * 10 + 10000);
    let seeStatus = await inquirer.prompt({
        name: "status",
        type: "list",
        message: "Do you want to see your status/details?",
        choices: ["yes", "no"],
    });
    if (seeStatus.status == "yes") {
        console.log("YOUR STATUS/DETAILS;");
        console.log(`Name: ${studentName.student} ${"\n"}ID: ${idNumber} ${"\n"}Course Name: ${coursesName.courses} ${"\n"}Course Timing: ${courseTime.timings}`);
        if (coursesName.courses == "Basic Course") {
            console.log(`Monthly Course Fee:${basicCourseFees}`);
        }
        else if (coursesName.courses == "HTML Course") {
            console.log(`Monthly Course Fee:${htmlCourseFees}`);
        }
        else if (coursesName.courses == "CSS Course") {
            console.log(`Monthly Course Fee:${cssCourseFees}`);
        }
        else if (coursesName.courses == "JS Course") {
            console.log(`Monthly Course Fee:${jsCourseFees}`);
        }
    }
    else if (seeStatus.status == "no") {
        console.log("That's alright");
    }
}
else if (enrollAns.enroll == "no") {
    console.log("That's alright, no problem");
}
