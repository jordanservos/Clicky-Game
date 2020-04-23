import React from "react";
import "./images.css";

function ImageHolder(props) {
  //create an image array

  const imageArray = [
    <img
      key="1"
      alt=""
      id="1"
      src={require("../../assets/images/bulba.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="2"
      alt=""
      id="2"
      src={require("../../assets/images/charizard.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="3"
      alt=""
      id="3"
      src={require("../../assets/images/chikorita.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="4"
      alt=""
      id="4"
      src={require("../../assets/images/Eevee.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="5"
      alt=""
      id="5"
      src={require("../../assets/images/fox.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="6"
      alt=""
      id="6"
      src={require("../../assets/images/meowth.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="7"
      alt=""
      id="7"
      src={require("../../assets/images/mew.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="8"
      alt=""
      id="8"
      src={require("../../assets/images/mewtwo.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="9"
      alt=""
      id="9"
      src={require("../../assets/images/monkey.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="10"
      alt=""
      id="10"
      src={require("../../assets/images/pikachu.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="11"
      alt=""
      id="11"
      src={require("../../assets/images/simisear.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="12"
      alt=""
      id="12"
      src={require("../../assets/images/squirtle.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="13"
      alt=""
      id="13"
      src={require("../../assets/images/ash.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="14"
      alt=""
      id="14"
      src={require("../../assets/images/froggy.png")}
      onClick={props.handleImageClick}
    />,
    <img
      key="15"
      alt=""
      id="15"
      src={require("../../assets/images/vapareon.png")}
      onClick={props.handleImageClick}
    />,
  ];

  //create function to shuffle images on click
  function Shuffle(arr) {
    let counter = arr.length;
    let temp;
    let index;

    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = arr[counter];
      arr[counter] = arr[index];
      arr[index] = temp;
    }
    return arr;
  }

  //display new shuffle array of images
  let newImages = Shuffle(imageArray);

  return (
    <main className="newImages">
      <div className="container text-center">{newImages}</div>
    </main>
  );
}

export default ImageHolder;
