import logo from './logo.svg';
import './App.css';
import slides from './Slides'
import {useState} from 'react';
import { createGlobalStyle, CreateGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  :root {
  }

  body {
    background: black;
  }
`

function App() {
  const [progress, setProgress] = useState(0)
  const incrementState = () => setProgress(progress + 1)

  return (
    <div >
      <GlobalStyle />
      {
        slides.map( Slide => <Slide increment={ incrementState } /> )
      }
    </div>
  );
}

export default App;
