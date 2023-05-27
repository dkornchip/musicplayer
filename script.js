import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const firstSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

const KeyboardKeys = ({play, sound: {id, key, url, keyCode}}) => {
  
  const handleKeydown = (event) => {
    if(event.keyCode === keyCode){
      play(key, id)
    }
  }
  
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown)
  }, [])
 
  return (
    <button className="drum-pad" id={keyCode} onClick={() => play(key, id)}>
      <audio className="clip" id={key} src={url} />
      {key}
      </button>
    )
}

const Keyboard = ({ play }) => {
  return firstSoundsGroup.map((sound) => <KeyboardKeys play={play} sound={sound} />)
}

const SoundDisplay = ({name}) => {
  return (
  <h2 id="display">Current Sound is: {name}</h2>
  )
}

const App = () => {
  
  const [name, setname] = React.useState("(play something damn it!)")
  
  const play = (key, sound) => {
    setname(sound)
    const audio = document.getElementById(key)
    audio.currentTime = 0;
    audio.play()
  }
  
  return (
  <div id="drum-machine">
    <Keyboard play={play} />
    <SoundDisplay name={name} />
  </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#App"))
      
 
      