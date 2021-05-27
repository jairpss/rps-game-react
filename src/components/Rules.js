import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

function Rules() {
    const [visible, setVisible] = useState(false);
    function handleToggleClick() {
        setVisible(!visible)
    }
    return (
        <RulesStyled>
            {
                (visible) && (
                    <div className='rules-overlay'>
                        <h2>Rules</h2>
                        <img src="./images/image-rules.svg" alt="Game Rules" />
                        <img className='close-btn' onClick={handleToggleClick} src="./images/icon-close.svg" alt="Close Game Rules" />
                    </div>
                )
            }
            <Button onClick={handleToggleClick} className="button">
                Rules
            </Button>
        </RulesStyled>
    )
}

const RulesStyled = styled.div`
    text-align:center;
    .close-btn{
        margin-top: 2em;
        cursor: pointer;
    }
    .rules-overlay{
        background-color: #ffffff;
        padding: 4em 0; 
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        h2 {
        color: #3B4262;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 1em;
        }
    }   
    @media screen and (min-width: 768px) {
        .button{
            float: right;
            position: fixed;
            right: 2em;
            bottom: 2em;
        }
        .rules-overlay{
            width: 400px;
            margin: auto;
            border-radius: 10px;
            top: 0;
            bottom: initial;
            transform: translateY(50%);
            padding: 2em;
            box-sizing:border-box;
            h2{
                font-size: 32px;
                align-self: flex-start;
                margin: 0 0 1.2em 0;
            }
        }
        .close-btn{
            position: absolute;
            right: 2em;
            top: .8em;
        }
        
    }
`;

export default Rules
