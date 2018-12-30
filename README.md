<h1 align="center">Spaced Repetition Spanish App</h1>

[Demo Spanish App Here](https://spanish-app-client.herokuapp.com/)

## Summary
Spanish app is a responsive full-stack application that allows users to learn Spanish through a technique called "Spaced Repetition". As the user answers questions correctly, the algorithm will wait a little longer before presenting that particular question again. The data structure that stores the words is a linked list.

## Screenshots :camera:
| <img alt="Landing Page" src="https://github.com/AlexanderPuhl/speak-spanish-client/blob/master/assets/Landing_Page.jpg" width="350"> | <img alt="Registration Page" src="https://github.com/AlexanderPuhl/speak-spanish-client/blob/master/assets/Registration_Page.jpg" width="350"> | <img alt="Login Page" src="https://github.com/AlexanderPuhl/speak-spanish-client/blob/master/assets/Login_Page.jpg" width="350"> |
|:---:|:---:|:---:|
| Landing Page | Registration Page | Login Page |

| <img alt="Dashboard Page" src="https://github.com/AlexanderPuhl/speak-spanish-client/blob/master/assets/Dashboard_Page.jpg" width="350"> | <img alt="Correct Answer" src="https://github.com/AlexanderPuhl/speak-spanish-client/blob/master/assets/Question_Correct.jpg" width="350"> | <img alt="Incorrect Answer" src="https://github.com/AlexanderPuhl/speak-spanish-client/blob/master/assets/Question_Incorrect.jpg" width="350"> |
|:---:|:---:|:---:|
| Dashboard | Correct Answer | Incorrect Answer |

## Features

### User Accounts
Visitors can create an account of their own and then login to that account upon coming back.

### Presents A Question 
Users are presented with a word in Spanish, they need to enter the correct English translation of that word and will be told if they got the question correct or not.

### Text To Speech
When presented with a word in Spanish, the user has the option to click on a speaker icon to hear the word in Spanish.

## Tech Used :computer:

### Front-End
* HTML5
* CSS3
* React

### Back-End
* Node.js
* Express.js
* MongoDB
* Passport - middleware for local and OAuth2.0 authenticaion
* Bcrypt - middleware for password hashing

### Testing and Deployment
* Mocha - testing framework
* Chai - assertion library for Node
* Travis Cl - continous integration service
* Heroku - cloud PaaS
* mLab - cloud database service

## Project Location
Both the client and the server are hosted on Heroku as individual projects. The Mongo database is hosted on mLab.

[Spanish App - Server README.md](https://github.com/thinkful-ei23/Spanish-Server-Alex-DavidF/blob/master/README.md)

## API Documentation
[Click to view API documentation](https://documenter.getpostman.com/view/4458639/RzfasXcs)
