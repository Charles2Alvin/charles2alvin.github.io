import React from 'react';
import ReactDOM from 'react-dom';
const h= React.createElement;
class PrivateGallery extends React.Component{
    constructor(props) {
        super(props);
        this.root = props.root;
        this.toExhibition = props.toExhibition;
        this.toDetails = props.toDetails;
        this.privateGallery = [];
        
        const view = new PrivateGalleryView();
        // view.render(this.root);
        ReactDOM.render(view, document.body.querySelector("#privateGallery"));
        // const update = () => { (document.body.querySelector("#privateGalleryDiv")) };
        // update();
        // console.log("hey");
        document.body.querySelector("#privateGallery").addEventListener("click", event=>{
            // console.log("hey");
            // console.log(event.target.id);
            if(event.target.id === "backButton"){
                this.toDetails();}
            });

            
    }
    render(){
        return <PrivateGalleryView></PrivateGalleryView>
    }
}
function PrivateGalleryView() {
    return <div id="privateGalleryDiv">log in first then come back</div>
    // return h("div", { id: "privateGalleryDiv" }, "log in first then come back");
}
function PrivateGalleryView1({artworkList}){
    // console.log("artworkList");
    // console.log(artworkList);
    return h("div",null,  h("button", {id : "backButton" },h("i", null,"back")) ,h("p", null,"Your Gallery"), artworkList.map(artwork=>h("div",{id:artwork.id}, h("img", {src:artwork.image, style:{height:'200px'}}),h("div",null, artwork.title), ("div",null, artwork.artist))));
    // return <div><span>Your Gallery</span> {{artworkList}.map(artwork=>(<div><img src={artwork.image} style={{height:"200px"}}></img><div>{artwork.title}</div><div>{artwork.artist}</div></div>))}</div> 
    // return h("div", h("span", "Your gallary"),artworkList.map(artwork=>h("div",h("img", {src:artwork.image,style:"height:200px"}),h("div", artwork.title), h("div", artwork.artist))));

}
const PrivateGallery_funcs = {PrivateGallery, PrivateGalleryView, PrivateGalleryView1};

export default PrivateGallery_funcs;
