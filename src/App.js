import { useState } from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './util';
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, useCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
