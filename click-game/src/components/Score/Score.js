import React from 'react';
import "./score.css";

function Score(props) {

    return (

<div class="jumbotron jumbotron-fluid">
  <div class="container text-center">
    <h3 class="display-4">Your Score: {props.score}</h3>
    <h3 class="display-4">Top Score: {props.topScore}</h3>
    <hr></hr>
    <p>Click on different Pokemon images each time to earn points! Repeat click and you LOSE!</p><br></br>
  
  </div>
</div>

    );

}

export default Score;