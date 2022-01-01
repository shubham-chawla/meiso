/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import useDetectTheme from '../components/useDetectTheme'
import PlayerControls from '../components/PlayerControls'
import ThemeSelector from '../components/ThemeSelector'

const modes = {
  light: {
    audio: 'witcher-theme',
    video: 'Geralt-day.mp4'
  },
  dark: {
    audio: 'witcher-theme',
    video: 'Geralt-night.mp4'
  }
}

const Home: NextPage = () => {
  const { theme, setTheme } = useDetectTheme()
  const [isPlaying, setIsPlaying] = useState(false)

  const play = playing => {
    const player = document.querySelector('#audio-player')
    if (playing) {
      player.play()
    } else {
      player.pause()
    }
  }

  const handlePlayPause = bool => {
    setIsPlaying(bool)
    play(bool)
  }

  const handleThemeClick = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <main>
      <div className="av">
        <video
          src={`/video/${modes[theme].video}`}
          autoPlay
          loop
          playsInline
          muted
          poster="/video/poster.jpg"
        />
        <audio id="audio-player" loop>
          <source src={`/sounds/${modes[theme].audio}.mp3`} type="audio/mpeg" />
        </audio>
      </div>
      <div className="container">
        <PlayerControls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
        />
        <ThemeSelector theme={theme} handleThemeClick={handleThemeClick} />
      </div>
    </main>
  )
}

export default Home
