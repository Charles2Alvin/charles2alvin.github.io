import React from 'react';
import ReactDOM from 'react-dom';

// SignIn().render(document.body.querySelector("#sign-in"));

// import App from "../../App";
import Welcome from "./welcome/welcomeReact";
import Details from "./details/detailsReact";
import DailyExhibition from "./dailyExhibition/dailyExhibitionReact";
// new Welcome(document.body.querySelector("#welcome"), toExhibition);
// new DailyExhibition(document.body.querySelector("#dailyExhibition"), toDetails, toExhibition);
// new Details(document.body.querySelector("#details"), toExhibition, toPrivateGallery);

// const model = new NeverlandModel();  

// function App(){
// console.log( {Welcome,WelcomeView} );
const myPage = ["welcome", "dailyExhibition", "details", "privateGallery", "signIn", "signUp"];

function show(section) {
    myPage.map(x=>document.body.querySelector("#" + x).classList.add("hide"));

    document.body.querySelector("#" + section).classList.remove("hide");
    window.location.hash = section;
}
const toExhibition = [() => show("dailyExhibition"), "NEVERLAND"];
const toPrivateGallery = ()=>show("privateGallery");
const toDetails = () => show("details");
const toSignIn = () => show("signIn");

ReactDOM.render(
    <Welcome toExhibition={toExhibition}/>,
    document.body.querySelector("#welcome"));
ReactDOM.render(
    <DailyExhibition toDetails={toDetails} toExhibition={toExhibition}/>,
    document.body.querySelector("#dailyExhibition"));
ReactDOM.render(
    <Details toExhibition={toExhibition} toPrivateGallery={toPrivateGallery} toSignIn = {toSignIn}/>,
    document.body.querySelector("#details"));
        
 


/*test*/
if (!window.location.hash) { window.location.hash = "welcome" };
show(window.location.hash.split('#', window.location.hash.length)[1]);

window.addEventListener("hashchange", event => show(event.newURL.split("#", event.newURL.length)[1]));

// export default App;
// }
// export default App;