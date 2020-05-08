import React from 'react';
import ReactDOM from 'react-dom';
import Details_funcs from '../details/detailsReact';
import PrivateGallery_funcs from '../privateGallery/privateGalleryReact';
import ENDPOINT from '../apiConfig';

let currentItem;
let privateGallery=[];
let userEmail = "";
function setCurrentItem(item){
    currentItem = item;
    
    
}
function setUserEmail(email){
    userEmail = email;
}
function getUserEmail(){
    return userEmail;
}
function getCurrentItem(){
    return currentItem;
}
function updateDetailPage(){
    let artwork = getCurrentItem();
    console.log(artwork);
    let view = new Details_funcs.DetailsView1(artwork);
    ReactDOM.render(view, document.body.querySelector("#details"));
    // view.render();
}
function initialPrivateGallery(){
    setPrivateGallery(getFavouriteList());
}
function setPrivateGallery(gallery){
    if(gallery)
        privateGallery = gallery;
}
function getPrivateGallery(){
    return privateGallery;
}
function updatePrivateGallery(){
    //array of artwork
    console.log(getPrivateGallery());
    if(!getPrivateGallery()){   
        // console.log("getPrivateGallery(): "+getPrivateGallery());
       setPrivateGallery().push(getCurrentItem());
       //
       addFavorite();
       getFavouriteList()
    //    console.log();
   }
   else{
       let isExist = false;
       console.log(getPrivateGallery());
       for(let x of getPrivateGallery()){
        //    console.log("x: "+x.id +"    item: "+getCurrentItem().id);
           if(x.id == getCurrentItem().id){
            //    console.log("x!=now + "+x.id != getCurrentItem().id);
               isExist=true;
            }
       }
       if(!isExist){
        // console.log("hey");
         getPrivateGallery().push(getCurrentItem());

         //更新数据库 个人收藏页
         
        addFavorite();
        getFavouriteList()
        }
    }
    // console.log(getFavouriteList());
   let artworkList = getPrivateGallery();
//    console.log("artworkList: "+artworkList);
    let view = new PrivateGallery_funcs.PrivateGalleryView1(artworkList = {artworkList});
    ReactDOM.render(view, document.body.querySelector("#privateGallery"));
    
    // view.render(document.body.querySelector("#privateGallery"));
}
function addFavorite(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", getUserEmail());
    urlencoded.append("objectID", getCurrentItem().id);
    // console.log(getCurrentItem().id);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    fetch("https://afternoon-gorge-52652.herokuapp.com/addFavorite", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}
function getFavouriteList(){
    var urlencoded = new URLSearchParams();

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
console.log(getUserEmail());
fetch("https://afternoon-gorge-52652.herokuapp.com/getFavorite?email="+getUserEmail(), requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
}

// function keyUp(event){
//     if(event.keyCode===38){
            
//     }
// }
function getArtwork(){

    function handleHTTPError(response) {
        if (response.ok)
            return response;
        throw Error(response.statusText);
    }

        return fetch(ENDPOINT +"artworks?limit=30", {
        "method": "GET"
    })
    .then(handleHTTPError)
    .then(response => response.json()) // from headers to response data
    .then(data => data.data) // leave out the unimportant parts of the response data
    .catch(console.error);
}

function getArtworkPicture(){

        //通过id找到本地artworklist中的artwork -> thumbnail, width, height
        // => image_url = thumbnail.url +/full/+ width, + /0/default.jpg
        // https://www.artic.edu/iiif/2/7e21e656-ddae-de1c-f46b-a869224043bd/full/2101,/0/default.jpg 

        return "https://www.artic.edu/iiif/2/7e21e656-ddae-de1c-f46b-a869224043bd"+"/full/"+"2101,"+"/0/default.jpg";

    
}


const Utils_funcs = {setCurrentItem, getCurrentItem, updateDetailPage, setPrivateGallery, getPrivateGallery, updatePrivateGallery, getArtwork, 
    getArtworkPicture, getFavouriteList, initialPrivateGallery,getUserEmail,setUserEmail};

export default Utils_funcs;
