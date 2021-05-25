import React from 'react'
import styled from 'styled-components'

function Button({...props}) {
    return (
        <ButtonStyled {...props}>
            Rules
        </ButtonStyled>
    )
}

const ButtonStyled = styled.div`
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
    &:hover{
        background-color: white;
        color: #131537;
    }
`;

export default Button
