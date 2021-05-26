import React, { useContext } from 'react'
import styled from 'styled-components'
import { ScoreContext } from './../App'

function Score() {
    const { score } = useContext(ScoreContext)
    return (
        <ScoreStyled>
            <small>SCORE</small>
            <p>{score}</p>
        </ScoreStyled>
    )
}

const ScoreStyled = styled.div`
    background: #ffffff;
    text-align: center;
    padding: 10px 0;
    border-radius: 5px;
    width: 80px;
    small{
        color: #2A45C2;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 10px;
    }
    p{
        color: #565468;
        font-size: 40px;
        margin: 0;
        font-weight: 700;
    }
`;

export default Score
