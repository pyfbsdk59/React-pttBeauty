import React, { Component } from "react";
import './App.css'

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      font_size: "16",
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgur.com/ct87djV.jpg", //https://i.imgflip.com/1bij.jpg
      allMemeImgs: [],
      color:""
    };

  }

  
  handleClick = () => {

    fetch("https://pttbeauty-restful.onrender.com/api/images/random/") //https://pttbeauty-restful.onrender.com/api/images/random/
    .then(data => data.json())
    .then(response => {
      const { id, Url } = response;
      console.log(id);
      console.log(Url);
      this.setState({ randomImg: Url });
    });  
  
  };

  componentDidMount() { //https://api.imgflip.com/get_memes
    fetch("https://pttbeauty-restful.onrender.com/api/images/random/") //https://pttbeauty-restful.onrender.com/api/images/random/
      .then(data => data.json())
      .then(response => {
        const { id, Url } = response;
        console.log(id);
        console.log(Url);
        this.setState({ randomImg: Url });
      });
  }

  render() {

    return (
      <div>
        <div className="meme-form">  
          <button onClick={this.handleClick}>亂數選擇ptt表特</button>
        </div>
        <div className="meme">

          <img src={this.state.randomImg} alt="" />

        </div>
       
      </div>
    );
  }
}

export default MemeGenerator;








































