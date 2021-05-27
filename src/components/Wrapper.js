import React from 'react'
import styled from 'styled-components'

function Wrapper( { children } ) {
    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

const WrapperStyled = styled.div`
    max-width: 700px;
    margin: auto;
`;

export default Wrapper
