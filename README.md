This site will be a self-hosted applicatin for one person to
keep track of what plants they want to purchase.


features:
- creating and attaching plants to each site
- creating sites and seeing what plants are attached to sites 
- Marking listed plants as purchased
- updating individual plants and tasks


Components:
- A Node.js program that will use Express to listen for HTTP messages.
- Within server program, a Postgres database will be used to store plants and sites
- Sequelize will be used to define and interact with plants and sites tables
- The server will serve up HTTP documents to render the user-facing portion of the application
- Some CSS and front-end Javascript will be used to improve user expirence in the browser

Proposed task order (subject to change):
- set up initial boilerplate for project(git setup, installing libraries, establishing basic routes, creating database)
- Defining models with Sequelize for plants and plant sites, and relating them
- Defining a route to connect to a React component that has a form to create a new site
- Defining a route to connect to a React component that has a form to create a new plant
- Defining a route to send back an  React component with the list of plants in the database
- Adding functinality for setting a plant to "purchased" and "Not-purchased"


PART 1:
Set Up: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
Step 1: Create your Node (Express) backend:
- Initialize a new git repo with the command git init.
- Create a .gitignore file which will ignore the node_modules folder.
- Ran the command npm init -y (this creates the package.json file)
- Install express, sequelize and pg. Then, as a dev dependency, install nodemon.
- Create server folder, with an index.js, use express to create server that runs on PORT 3001

Step 2: Create an API Endpoint
- To start: We want to use our Node and Express server as 
an API, so that it can give our React app data, change that
 data, or do some other operation only a server can do.
 - // server/index.js,  above the app.listen function.
...

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
-End your start script in the terminal by pressing 
Command/Ctrl + C. Then restart it by running npm start again.
And to test this, we can simply visit http://localhost:3001/api 
in our browser and see our message.

Step 3: Create your React frontend
- Run npx create-react-app client
- After that, we will have a React app with 
all of its dependencies installed.
The only change we have to make is to add a property
called proxy to our package.json file.
// client/package.json
"proxy": "http://localhost:3001"
- This will allow us to make requests to our Node 
server without having to provide the origin it is running 
on (http://localhost:3001) every time we make a network 
request to it.
- After that, will start up on localhost:3000:
cd client
npm start

Step 4: Make HTTP Requests from React to Node
- Use the working React app to interact with our API by
fetching data from the /api endpoint that we created earlier in server/index.js
- 1st. head to the App.js component in our src folder and make an HTTP
request using useEffect.
- We will make a simple GET request using the Fetch API to our backend and 
then have our data returned as JSON.

Once we have the data returned to us, 
we will get the message property (to grab our greeting 
that we sent from the server) and then put it in a state
 variable called data.

This will allow us to display that message in our page if 
we have it. We are using a conditional in our JSX to say 
that if our data is not there yet, show the text "Loading...".

import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;


PART 2: 

1st) Adding more dependencies from TodoList to server package-json and client package-json
server package-json:
-dependencies:
cors: npm i cors
morgan: npm i morgan
-devDepndencies:
axios: npm install axios --save-dev 
babel-loader: npm install babel-loader --save-dev 

client package-json:
- dependencies:
reduxjs/toolkit: npm i @reduxjs/toolkit
axios: npm install axios
react-redux: npm i react-redux
react-router-dom:npm i react-router-dom

Notes: Whenever you add a library 
or module that is required only in 
the development of your project, you 
can find it under devDependencies.
For npm users, the below command will help to add devDependencies in the project: [Replace 'dev dependencies' with the module you're installing.] 
npm install <dev_dependencies> --save-dev 

 Whereas devDependencies are used for project development purposes only. 

2nd) Building proxy server
create api and db folders, and app.js!

- Update scripts as per TodoList App: a lil confused about these

(It's time to push the set up to github)
:https://github.com/JDVasquez26/git-github-overview-readme

- create database for sequelize to connect to:
createdb plantwishlist

- connect to database: dbconn.js

-Plan modules before sync and seeding db
- Plant model
    -name(not null);
    -purched(not null, boolean, default false);
    -imgUrl
    
- Site model
    -name (not null)

Associations:
ETC.
