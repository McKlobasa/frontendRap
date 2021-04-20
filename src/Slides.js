import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'

const type = keyframes`
  from { width: 0 }
  to { width: 100% }
`

const FirstVerse = () => {
  const [stateInVerse, setStateInVerse] = useState(0)

  const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;

    justify-content: left;
    align-items: top;
    ${ props => props.isCentered > 0 ? 'justify-content: center;align-items: center;' : ''}
  `
  const Text = styled.p`
    color: white;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      ${type} 3.5s steps(40, end),
  `
  const CenteredDiv = styled.div`
    border: 3px solid pink;
    box-shadow: 3px 3px blue;
    padding: 20px;
    height: 100px;
    width: 30%;
    ${ props => props.isCentered > 1 ? 'border-top: 40px solid red; border-radius: 30% 30% 0px 0px;' : ''}

    position: relative;
  `


  const Basement = styled.div `
    border: 3px solid red;
    box-shadow: 3px 3px blue;
    padding: 20px;
    height: 100px;
    width: 90%;

    font-size: 70px;

    position: absolute;
    top: 100%;
    left: 0;

    margin-top: 33px;
    text-align: right;
  `
  const Tree = styled.div`
    font-size: 10vmin;
    position: absolute;
    bottom: 0;
    left: 110%;
    margin-top: 15px;

    width: fit-content;
  `
  const Car = styled.div`
    font-size: 10vmin;
    position: absolute;
    bottom: 0;
    right: 110%;
    margin-top: 15px;
  `

  const Ground = styled.div`
    height: 3px;
    width: 200%;
    background: lime;

    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 15px;
    transform: translate(-25%);
  `

  const Verses = () => {
    if (stateInVerse < 2) return  <>
      <p>I know how to show you text</p>
      <p>{stateInVerse > 0 ? 'I know to center a div ain\'t complex' : ''}</p>
    </>

    if (stateInVerse == 2) return <>
      <p>I know how to dwell in basement</p>


    </>

    return <>
      <p>make them animations flex</p>
    </>

  }


  return (
    <>
      <button onClick={() => setStateInVerse(stateInVerse + 1)} >pejt naprej</button>

      <Container isCentered={stateInVerse} >
        <CenteredDiv isCentered={stateInVerse} >
          { stateInVerse > 1 ? <>
              <Ground />
              <Basement>😜 💻</Basement>
              <Tree>🌳</Tree>
              <Car>🏎️ </Car>
            </>: ''}
          <Text>
            <Verses />
          </Text>
        </CenteredDiv>
      </Container>
    </>
  )
}

const Slides = [
  FirstVerse
]

export default Slides
