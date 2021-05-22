import React from 'react'
import styled from 'styled-components'

function Score() {
    return (
        <ScoreStyled>
            <small>Score</small>
            <p>12</p>
        </ScoreStyled>
    )
}

const ScoreStyled = styled.div`
    background: #ffffff;
    text-align: center;
    padding: 10px 0;
    border-radius: 5px;
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
