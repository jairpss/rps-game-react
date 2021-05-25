import React from 'react'
import styled from 'styled-components'

function Rules() {
    return (
        <RulesStyled>
            <Button>
                Rules
            </Button>
        </RulesStyled>
    )
}

const RulesStyled = styled.div`
    text-align:center;
`;

const Button = styled.div`
    display: inline-flex;
    border: 1px solid #ffffff;
    border-radius: .5em;
    min-width: 128px;
    padding: .7em;
    box-sizing: border-box;
    justify-content: center;
    cursor: pointer;
    letter-spacing: .2em;
    text-transform: uppercase;
`;


export default Rules
