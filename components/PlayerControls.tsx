const PlayerControls = ({
  isPlaying,
  handlePlayPause
}: {
  isPlaying: boolean
  handlePlayPause: (arg1: boolean) => void
}) => {
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
