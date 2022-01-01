/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const modes = {
  woods: {
    audio: 'birds',
    video: 'blurry-trees.mov'
  },
  rain: {
    audio: 'rain',
    video: 'rain.mp4'
  },
  beach: {
    audio: 'beach',
    video: 'beach.mp4'
  }
}

const Home: NextPage = () => {
  const [currentMode, setCurrentMode] = useState('beach')
  const [isPlaying, setIsPlaying] = useState(false)

  const play = (playing) => {
    const player = document.querySelector('#audio-player')
    if (playing) {
      player.play()
    } else {
      player.pause()
    }
  }

  return (
    <main>
      <div className="av">
        <video src={`/video/${modes[currentMode].video}`} autoPlay loop playsInline muted></video>
      </div>
      <div className="container">
        <div className="grid-p-btn">
          <button className="btn-flat">2 minutes</button>
        </div>
        <div className="grid-p-btn">
          <button className="btn-flat">5 minutes</button>
        </div>
        <div className="grid-p-btn">
          <button className="btn-flat">10 minutes</button>
        </div>
        <div className='player-clock'>
          <audio id="audio-player" loop>
            <source src={`/sounds/${modes[currentMode].audio}.mp3`}  type="audio/mpeg" />
          </audio>
          {!isPlaying ? (
            <>
              <img width={250} height={250} src="/svg/track-outline.svg" alt="play btn" />
              <img
                className="play-btn"
                onClick={() => {
                  setIsPlaying(true)
                  play(true)
                }}
                width={100}
                height={100}
                src="/svg/play.svg"
                alt="play btn"
              />
            </>
          ) : (
            <>
              <img width={250} height={250} src="/svg/track-outline.svg" alt="play btn" />
              <img
                className="pause-btn"
                onClick={() => {
                  setIsPlaying(false)
                  play(false)
                }}
                width={100}
                height={100}
                src="/svg/pause.svg"
                alt="pause btn"
              />
            </>
          )}
          </div>
          <div className="timer"><h3>10:00</h3></div>
          
      </div>
    </main>
  )
}

export default Home
