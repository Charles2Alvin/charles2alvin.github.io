import React from 'react';
import ReactDOM from 'react-dom';
import Details from '../details/detailsReact';
import funcs from '../util/utils';
class DailyExhibition extends React.Component {
    constructor(props) {
        super(props);
        this.root = props.root;
        this.toDetails = props.toDetails;
        this.toExhibition = props.toExhibition;

        this.galleryList = [];
        this.displayingGallery = [];
        this.currentIndex = 0;
        // this.myArtWork = new Object();
        // this.myArtWork.id = 0;
        // const view = new DailyExhibitionView();
        // view.render(this.root);
        // ReactDOM.render(
        //     <Welcome toExhibition={toExhibition}/>,
        //     document.body.querySelector("#welcome"));

        ReactDOM.render(<DailyExhibitionView/>, document.body.querySelector("#dailyExhibition"));
        // this.renderArtwork(root);
        const update = () => { this.renderArtwork(document.body.querySelector("#resultDiv")) };
        update();
        // this.displayArtwork = this.displayArtwork.bind(this);

        this.keyUP = (event) => {
            if (event.keyCode === 38) {
                this.toExhibition[0]();
            }
        };



        this.keyDetection = (event) => {
            // console.log(event.keyCode + " key pressed");
            if (event.keyCode === 37) {
                this.displayArtwork(this.currentIndex - 1, this.root);
                // console.log(event.keyCode+" key pressed");
            } else if (event.keyCode === 39) {
                this.displayArtwork(this.currentIndex + 1, this.root);
                // console.log(event.keyCode+" key pressed");
            } else if (event.keyCode === 40) {
                this.toDetails();
                funcs.updateDetailPage();
                // window.removeEventListener("keydown",this.keyDetection,false);
                window.addEventListener("keydown", this.keyUP, false);
                if(funcs.getCurrentItem())
                    document.getElementById("description").innerHTML = funcs.getCurrentItem().description;
            }

        }
        this.keyDetection = this.keyDetection.bind(this);
        window.addEventListener("keydown", this.keyDetection, false);
        document.body.querySelector("#dailyExhibition").addEventListener("click", event=>{
            this.toDetails();
            funcs.updateDetailPage();}, false);

    }
    render(){
        return <DailyExhibitionView/>
    }
    renderArtwork(root) {
            const spinner = this.createSpinner();
            ReactDOM.render(spinner,document.body.querySelector("#dailyExhibition"));
            this.displayingGallery = [];


            funcs.getArtwork() /* TODO: read the params as the values of this.textControl and this.typeControl, in the correct order */
                .then(artwork => {
                    for (let i = 0; i < artwork.length; i++) {

                        let myArtWork = new Object();
                        myArtWork.id = artwork[i].id;
                        myArtWork.title = artwork[i].title;
                        myArtWork.artist = "";
                        for (let m = 0; m < artwork[i].artist_titles.length; m++) {
                            myArtWork.artist += artwork[i].artist_titles[m] + " ";
                        }
                        myArtWork.artistDisplay = artwork[i].artist_display;
                        myArtWork.date_start = artwork[i].date_start;
                        myArtWork.date_end = artwork[i].date_end;
                        myArtWork.description = artwork[i].description;
                        // console.log(artwork[i].color);
                        if (artwork[i].color) {
                            myArtWork.color_h = artwork[i].color.h;
                            myArtWork.color_l = artwork[i].color.l;
                            myArtWork.color_s = artwork[i].color.s;
                        }
                        // console.log("artwork[i].thumbnail: "+artwork[i].thumbnail);
                        if(artwork[i].thumbnail){
                            // console.log("artwork[i].thumbnail: "+artwork[i].thumbnail);
                            // console.log("vuyfghkjkhjhjk");
                            myArtWork.height = artwork[i].thumbnail.height;
                            myArtWork.width = artwork[i].thumbnail.width;
                            myArtWork.image = artwork[i].thumbnail.url + "/full/" + artwork[i].thumbnail.width + ",/0/default.jpg";
                        }
                        // console.log(artwork[i]);
                        // console.log(myArtWork);
                        this.galleryList.push(myArtWork);
                    };
                    let num = 0;
                    for (let j = 0; j < this.galleryList.length; j++) {
                        if (num < 3) {
                            if (this.galleryList[j].width && this.galleryList[j].description) {
                                this.displayingGallery.push(this.galleryList[j]);
                                num++;
                            }
                        } else {
                            break;
                        }
                    }
                    console.log(this.displayingGallery);
                    // console.log("sadasdasdasd");
                    // console.log(this.galleryList);
                    console.log(this.displayingGallery[0]);
                    funcs.setCurrentItem(this.displayingGallery[0]);
                    console.log(this.galleryList);
                    this.displayArtwork(0, root);
                    
                    // console.log("sadasdasdasd2");
                })
                .catch(err=> ReactDOM.render(<div>{err.toString()}</div>,document.body.querySelector("#dailyExhibition")))
                // .finally(() => spinner.remove())
        }
    createSpinner() {
        // return h("div", h("img", { className: "loadingPicture", src: "https://ak6.picdn.net/shutterstock/videos/1011054266/thumb/1.jpg" }))
        return <div>
                    <img className= "loadingPicture" style={{width: "100%", height: "100%"}} src= "loading.png"></img>
                </div>
    }

    displayArtwork(n = 0, root) {

        if (n > this.displayingGallery.length - 1)
            n = 0;
        if (n < 0)
            n = this.displayingGallery.length - 1;

        this.currentIndex = n;
        funcs.setCurrentItem(this.displayingGallery[n]);
        // if(this.dis)
        // console.log(this.displayingGallery);
        // if(!this.displayingGallery)
        console.log(n+"     "+this.displayingGallery[n]);
            ReactDOM.render((<DailyExhibitionView1 artwork = {this.displayingGallery[n]}></DailyExhibitionView1>), document.body.querySelector("#dailyExhibition"));
        // return <div></div>
    }


}
// function DisplayCertainArtwork({artwork}){
//     return <div></div>
// }

function DailyExhibitionView1({artwork}) {
    // return h("div", {id:"resultDiv"});
    console.log(artwork.height + "   width: " + artwork.width);
    console.log(artwork.image);
    if (artwork.height > artwork.width) {
        // if(artwork.width>artwork.height){
        // return h("div",{style:"background-color: #000; text-align: center"}, h("img", { src: artwork.image, style: "width:100vw" }))
        // }else{
        // return h("div", { style: "background-color: #000; text-align: center" }, h("img", { src: artwork.image, style: "height:100vh" }))
        console.log(artwork.image);
        return <div className = "artwork_display">  <img src= {artwork.image} style= {{height:'100vh'}}></img></div> 
        // "background-color: #000; text-align: center"
    //}
    } else {
        // console.log("height: " + artwork.height + "window width: " + window.screen.width + "  window height: " + window.screen.height);
        // console.log("height/width: "+ window.screen.height*1.0/window.screen.width);
        if (artwork.height > window.screen.height*1.0/window.screen.width* artwork.width) {
            return <div className = "artwork_display"> <img src= {artwork.image} style={{height:"100vh"}}></img></div>
            // text-align: center
            // return h("div", { style: "background-color: #000; text-align: center" }, h("img", { src: artwork.image, style: "height:100vh" }))
        } else {
            return <div className = "artwork_display"> <img src={artwork.image} style= {{width:"100vw"}}></img></div>
            // text-align: center
            // return h("div", { style: "background-color: #000; text-align: center" }, h("img", { src: artwork.image, style: "width:100vw" }))
        }
    }
}

function DailyExhibitionView() {
    return <div id="resultDiv"></div>
    // return h("div", { id: "resultDiv" });

}
// const DailyExhibition_funcs={DailyExhibition, DailyExhibitionView1, DailyExhibitionView}
// export default DailyExhibition_funcs;
export default DailyExhibition;