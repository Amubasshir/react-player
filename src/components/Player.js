import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="skip-right" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
