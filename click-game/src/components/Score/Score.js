import React from 'react';
import "./score.css";

function Score(props) {

    return (

<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h3 className="display-4" id="score">Your Score: {props.score}</h3>
    <h4 className="display-5" id="top-score">Top Score: {props.topScore}</h4>
    <hr></hr>
    <p id="alert">{props.alert}</p><br></br>
  
  </div>
</div>

    );

}

export default Score;