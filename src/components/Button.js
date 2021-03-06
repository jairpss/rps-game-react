import React from 'react'
import styled from 'styled-components'

function Button({children, ...props}) {
    return (
        <ButtonStyled {...props}>
            {children}
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

export const WhiteButton = styled(ButtonStyled)`
  background: white;
  color: #101a3f;
  min-width: 220px;
`;

export default Button
