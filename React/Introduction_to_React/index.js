import React from "https://esm.sh/react@19.1.1/?dev";
import ReactDOMClient from "https://esm.sh/react-dom@19.1.1/client?dev";
const rootElement = document.getElementById("root");
/* let user = {firstName:"Tharun", lastName: "Ketha"};
let name = user => user.firstName + " " + user.lastName;
let element = <h1>Hello {name(user)}!</h1>; */
const element = (
    <div>
    <h1>
        Hello!
    </h1>
     <p>Good to see you here.</p>
    </div>);
const root = ReactDOMClient.createRoot(rootElement);
root.render(element);