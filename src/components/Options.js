import React from 'react'
import styled from 'styled-components'
import Item from './Item'

function Options() {
    return (
        <OptionsStyled>
            <Item name='rock'/>
            <Item name='scissors'/>
            <Item name='paper'/>
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
`;

export default Options
