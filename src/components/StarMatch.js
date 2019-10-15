import React, {useState} from "react";
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';
import {utils} from './utils';

const StarMatch = () => {
  const [stars, setState] = useState(utils.random(1,9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
         <StarsDisplay count={stars}/>
        </div>
        <div className="right">
          {
          utils.range(1,9).map(range=>
            <PlayNumber key={range} number={range}/>
          )
          }
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};




export default StarMatch;