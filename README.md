# Pano | Project Management Software
An application used to manage tasks in different projects, built with React, Redux, TypeScript, CSS, Material UI, MongoDB, Express.js and Node.js.

## Project Status
This project is currently in development. Users are able to Sign in to the demo account and create new projects and issues. The dark mode is also usable as well and the app displays information mostly pulled from a database. In addition, the Google Geimini API has been successfully implemented as well.

## Project Screen Shots
![Sign In Page](https://i.ibb.co/cbxvB9x/dashboard.png) 
![Main Dashboard](https://i.ibb.co/j870f5t/signin.png) 
![Create an Issue with Ai](https://i.ibb.co/CmhqRzP/ai.png) 

## Installation and Setup Instructions
Clone this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:
`npm install`  

To run the App :
`npm run dev`  

To Visit App:
`localhost:3000/`  

To Run the Server, you will have to clone the repo for [Pano Server](https://github.com/daveanthonyc/Pano-Server) 

## Reflection
- I've always wanted to create some form of dashboard as analytics and process management is interesting to me, so I stumbled upon an open source project management tool called Plane.so which seemed like the perfect project to clone. I could mentally map out how I would design the system from a glance and so I copied the design but tried to code it from scratch using all the skills I have gained so far.
- I haven't used Redux Tool Kit, or Material UI extensively before and so this was a good challenge to wrestle with the APIs of these technologies.
- Some of the bigger challenges was dealing with synchrony issues when dealing with consecutive RTKQueries where one query was dependant on the result of the previous query.
- It was a great experience to get used to the flow of creating APIs, testing in postman, then integrating them into the frontend and manipulating the MUI styles in the compoonents.
