import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import Item from './Item'
import { WhiteButton } from './Button'
import { ScoreContext } from './../App'

const elements = [
    'paper',
    'scissors',
    'rock',
]

function Options() {
    const { score, setScore } = useContext(ScoreContext)
    const [results, setResults] = useState('')
    const [housePick, setHousePick] = useState('default')
    const [playing, setPlaying] = useState(false);
    const [pick, setPick] = useState('');
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function launchHousePick() {
        return new Promise((resolve, reject) => {
          let pick
          const interval = setInterval(() => {
            pick = elements[getRandomInt(0, 3)]
            setHousePick(pick)
          }, 75)
          setTimeout(() => {
            clearInterval(interval)
            resolve(pick)
          }, 2000)
        })
    }
    async function onClick(name) {
        setPlaying(true)
        setPick(name)
        const house = await launchHousePick()
        const results = playWithIA(name, house)
        setResults(results)
        if (results === 'win') {
           setScore(score + 1)
        }
      }
   
    function playWithIA(pick, housePick) {
        if (housePick === pick) {
          return 'draw'
        }
        if (pick === 'paper') {
          if (housePick === 'scissors') {
            return 'lose'
          }
          if (housePick === 'rock') {
            return 'win'
          }
        }
        if (pick === 'scissors') {
          if (housePick === 'paper') {
            return 'win'
          }
          if (housePick === 'rock') {
            return 'lose'
          }
        }
        if (pick === 'rock') {
          if (housePick === 'paper') {
            return 'lose'
          }
          if (housePick === 'scissors') {
            return 'win'
          }
        }
    }

    function handleTryAgainClick() {
        setPlaying(false)
        setResults('')
    }
    return (
        <OptionsStyled playing={playing} results={(results !== '')}>
            <span className="line"></span>
            {
                !playing ? (
                    <>
                        <Item name='paper' onClick={onClick}/>
                        <Item name='scissors' onClick={onClick}/> 
                        <Item name='rock' onClick={onClick}/>
                    </>
                ) : (
                    <>
                        <div className='in-game'>
                            <Item playing={playing} name={pick} isShadowAnimated={(results === 'win')}/>
                            <p>You Picked</p>
                        </div>
                        <div className='in-game'>
                            <Item playing={playing} name={housePick} isShadowAnimated={(results === 'lose')}/>
                            <p>The House Picked</p>
                        </div>
                        <div className="results">
                            {
                                results && (
                                    <>
                                        <h2>YOU {results}</h2>
                                        <WhiteButton onClick={handleTryAgainClick}>
                                            Play Again
                                        </WhiteButton>
                                    </>
                                )
                            }
                        </div>
                    </>
                )
            }
        </OptionsStyled>
    )
}

const OptionsStyled = styled.div`
    display: grid;
    grid-template-columns: 130px 130px;
    justify-content: center;
    justify-items: center;
    grid-gap: 30px 50px;
    margin: 2em 0;
    position: relative;
    & div:nth-of-type(3) {
        grid-column: span 2;
    }
    .in-game{
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;
        font-size: large.8em;
        letter-spacing: 1px;
    }
    .results {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h2{
          text-transform: uppercase;
          font-size: 56px;
          margin: 10px; 
      }
    }
    .line {
    display: ${({ playing }) => !playing ? 'block' : 'none'};
    height: 14px;
    background: rgba(0,0,0,.2);
    position: absolute;
    width: 200px;
    top: 58px;
    &:before {
      content: '';
      height: 14px;
      background: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }
    &:after {
      content: '';
      height: 14px;
      background: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }
  @media screen and (min-width: 1024px) {
    .line {
      /* width: 300px; */
    }
  }
`;



export default Options
