import React from "react";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import next from "../../assets/next.svg";
import prev from "../../assets/prev.svg";
import { PAGES } from '../../helpers/index.js';

const AudioControls = ({
  page,
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
  <div className={`audio-controls ${page === PAGES.tales ? 'play-button-center' : ''}`}>
    {page === PAGES.tales ? '' :
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <img src={prev} />
    </button> }
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <img src={pause} />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <img src={play} />
      </button>
    )}
    {page === PAGES.tales ? '' :
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <img src={next} />
    </button> }
  </div>
);

export default AudioControls;
