import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Welcome from './welcome/welcomeReact';
import Details_funcs from "./details/detailsReact";
import DailyExhibition from "./dailyExhibition/dailyExhibitionReact";
import PrivateGallery_funcs from "./privateGallery/privateGalleryReact";
import SignIn from "./sign-in";
import SignUp from "./sign-up";



const myPage = ["welcome", "dailyExhibition", "details", "privateGallery", "signIn", "signUp"];

function show(section) {
    myPage.map(x=>document.body.querySelector("#" + x).classList.add("hide"));
    document.body.querySelector("#" + section).classList.remove("hide");
    window.location.hash = section;
}
const toExhibition = [() => show("dailyExhibition"), "NEVERLAND"];
const toPrivateGallery = ()=>show("privateGallery");
const toDetails = () => show("details");
const toWelcome = ()=>show("welcome");
const toSignIn = ()=>show("signIn");
const toSignUp = ()=>show("signUp");


ReactDOM.render(
    <Welcome toExhibition={toExhibition}/>,
    document.body.querySelector("#welcome"));
ReactDOM.render(
    <DailyExhibition toDetails={toDetails} toExhibition={toExhibition}/>,
    document.body.querySelector("#dailyExhibition"));
ReactDOM.render(
    <Details_funcs.Details toExhibition={toExhibition} toPrivateGallery={toPrivateGallery} toSignIn = {toSignIn}/>,
    document.body.querySelector("#details"));
ReactDOM.render(  
    <PrivateGallery_funcs.PrivateGallery toExhibition={toExhibition} toDetails={toDetails}/>,
    document.body.querySelector("#privateGallery"));
ReactDOM.render(
    <SignIn toWelcome = {toWelcome}/>,
    document.body.querySelector("#signIn"));

ReactDOM.render(
  <SignUp toSignIn = {toSignIn}/>,
    document.body.querySelector("#signUp"));
 


/*test*/
if (!window.location.hash) { window.location.hash = "welcome" };
show(window.location.hash.split('#', window.location.hash.length)[1]);

window.addEventListener("hashchange", event => show(event.newURL.split("#", event.newURL.length)[1]));


// ReactDOM.render(
//   <Welcome />,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
