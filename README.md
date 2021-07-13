# ReverseCalendar
A web app designed to not focus about deadlines and the future. A calendar for just living in today. See the deployed app at https://fathomless-sands-68777.herokuapp.com/. 

## Table of Contents

 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Test](#Tests)
 - [Contributors](#Contributors)
 - [License](#License)

 ## Installation

 ```npm i``` to install all dependencies necessary. Currently using bcrypt, connenct-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, sequelize.

 ## Usage

 ```npm start``` to initialize the app. Once running, the app will serve a homepage html file to the port specified in the server.js file, either 3001 on local machines or environment dependent on deployment. The home page displays all blog posts in the database. sessions are tracked using ```express-session```. 

 Users have the option to login or register for an account in the top right on the login-register page. 


 ## Tests

 No tests are implemented in this application.

 ## Contributors
- Connor Sullivan (https://github.com/Koxuvar/)

 ## License

 MIT License
 
 Copyright (c) 2021 
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
