# react-samples
Documenting useful concepts and book reads. 
Currently includes useful code from the books:
- [React Quickly](https://amzn.to/48HkBji) which comes with a website containing samples. 
- [ReactJS Foundations](https://amzn.to/3S6FRK7) is a good book to pair with  React Quickly as they both have different styles of information-sharing. I found the code herein to be a bit differently setup than the other book, but this was in fact one of the first newer books I've picked up for my learning. In the past, I also read
- [React Up & Running](https://amzn.to/3NL8ude) which is also good. It's a quick read and covers the absolute essentials, but doesn't cover everything. You can finish this book in less than a week, while the other 2 books would take a few weeks if done in tandem with coding on a local system.

If I had the time, I would look into the other books:
- [React Interview Guide](https://amzn.to/47p0Ufh) is a new book with parallel [github repo](https://github.com/PacktPublishing/React-Interview-Guide)
- [Full-Stack Web Development with GraphQL and React](https://amzn.to/3NMqsvK)

Project plan
- [X] Use create-react-app (CRA) to create and run a first sample App - refer PR/branch.
- [X] Setup a basic project without using CRA - minimalist project to start with. 
- [X] Ensure this is working and runs locally. 
- [X] Add on to add fun 'apps' like a Calculator, Timer, along with fetching and rendering the data. 
- [X] Add links to the apps so they're easy to navigate i.e Routing
- [] Filter and CRUD fetched data
- [] Seperate List from Detailed information.
- [] Visualization of this data using third-party libraries.
- [] Use Typescript examples as a seperate project.
- [] Add a 'server' that does something - looking into something like GraphQL as I've been curious on how it pans out vs Sql-based RDBMS I've used for the most part (with the exception of MongoDB)
- [] Simple server setup that allows from CRUD and filter operations.
- [] Update Readme periodically  with a focus on important concepts. 
- [] Add relevant eco systems into the mix: for instance Next.js are defaults to start with.  

You can create a sample project from scratch locally by following the steps below. 
1. Create a Node project by running this in the folder of choice. This should create a package.json file, which can also be manually configured. 
    ```npm init -y```

<!-- 2. Install Babel dependencies, i.e a loader for Webpack, presets for modern JS:
   Adds to devDependencies
    ```npm install --save-dev @babel/core babel-loader @babel/cli @babel/preset-env @babel/preset-react```

3. Install Webpack dependencies

    ```npm install --save-dev webpack webpack-cli webpack-dev-server```

Compile using `npx webpack`

4. Install HtmlWebpackPlugin (optional)
    
    ```npm install --save-dev html-webpack-plugin```
 -->
2. Install React dependencies
    ```npm install react react-dom react-scripts```

Most tutorials only require to install the first 2 libraries, and I concur. However, I wanted to try avoiding the hassle of installing Webpack, HtmlWebpackplugin, Babel, and even ESLint etc. and use what the `create-react-app` project had in it's package.json. Adding `react-scripts ` seemed to be the missing link, and adding that and running a set of shortcut scripts (in step 3.) did the same magic of installing a new server. 
 Note that I got this working without using Webpack, HtmlWebpackplugin, babel etc. All of that is automatically setup when using react-scripts. However, this will be setup later for completeness and clarity. 

3. Replace the `scripts` section, with the following lines of code to `package.json`.
    ```
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
    },
    ```

4. Run `npm run build`

5. Start the server using `npm start`

You will see this error. 
    ```
    Could not find a required file.
    Name: index.html
    Searched in: c:\code\personal-learning\react\react-samples\public
    ```
This is progress!  Create two folders `src`and `public`. You can change this as per the needs of your project. I've based this off the CRA structure for simplicity. 
    - Create `public`directory, `mkdir public`

    Add an `index.html` file 
    ```
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React App</title>
        </head>
        <body>
            <div id="root"></div>
        </body>
        </html>
    ```

    - Create a `src` directory. `mkdir src`
        Add 2 files to it:
       - App.js - This is a React component that translates to HTML. 
        ```
        import React from "react";
        const App = () => {
            return (
                <>
                <h1>
                    Hello world!
                </h1>
                <p>
                    Download the
                    <a href="https://reactjs.org/link/react-devtools"> React DevTools </a>
                    for a better development experience.
                </p>
                </>
            )
        }

        export default App
        ```
        
        - index.js that uses the App
        ```        
        import { StrictMode } from "react";
        import { createRoot } from "react-dom/client";
        import App from "./App";
        // Add to the 'root' element in index.html 
        createRoot(document.getElementById("root")).render(
        <StrictMode>
            <App />
        </StrictMode>
        );
        ```
    
Run `npm start` again, and you will be asked to set a default browser in package.json. Just select the 'yes' option and proceed. Notice the package.json getting updated to default recommendations. 

6. Before committing any changes to your code repository, make sure you have a .gitignore file that excludes, at a minimum, the `node_modules` folder. 

7. (Optional) To host the site for free to view outside of a localhost, you need any HTTP server (Apache, NGINX, Python etc.). It can be a web server, node server, or Netlify. 

    - Node http server: follow commented steps above
        ```npx http-server src```

    - To serve globally: 
        ```npm install -g serve```
We will come back to this later. 

8. Another good resource to add related packages later, will be done using [this article](https://dev.to/ivadyhabimana/how-to-create-a-react-app-without-using-create-react-app-a-step-by-step-guide-30nl)
on how to setup a React project from scratch. What I did is a little different as explained above. 

