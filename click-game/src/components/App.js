  
import React, { Component } from 'react';
import NavBar from "../components/NavBar/NavBar";
import Score from "../components/Score/Score";
import ImageHolder from '../components/ImageHolder/ImageHolder';
import './App.css';



class App extends Component {
// Set game start state variables
  state = {
    score: 0,
    topScore: 0,
    imagesSelected: [],
    alert: "Click a Pokemon to get started!"
  }

  //Create function for image clikcs

  handleImageClick = event => {

    // capture id of clicked image
const imageID = event.target.id;

//Create condition for user repeat clicks

if(this.state.imagesSelected.includes(imageID)) {
this.setState({
  score: 0,
  imagesSelected: [],
  alert: "You already cliked that one!"

});

} else {
  // capture id and pass to imageID if clicked for first time

  this.state.imagesSelected.push(imageID);

//update score and top score

if(this.state.topScore <= this.state.score) {
  this.setState({
topScore: this.state.score +1,
alert: "Great selection!",
score: this.state.score +1

  })
} else {
  this.setState({
    alert: "Great selection!",
score: this.state.score +1
  })
}

}

}

render () {

  return (
<>
<NavBar />
<Score />
{/* <ImageHolder /> */}
</>

  );
}


  }










export default App;
