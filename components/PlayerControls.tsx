const PlayerControls = ({ isPlaying, handlePlayPause }) => {
  return (
    <div className="player-controls">
      {!isPlaying ? (
        <span onClick={() => handlePlayPause(true)} className="icon">
          play_circle_outline
        </span>
      ) : (
        <div className="fade">
          <span onClick={() => handlePlayPause(false)} className="icon">
            pause
          </span>
        </div>
      )}
    </div>
  )
}

export default PlayerControls
