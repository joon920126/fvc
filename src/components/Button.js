import React from 'react';
import styled from 'styled-components'

const StyledButton = ({text, onClick}) => {
    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    );
}
 
export default StyledButton;

const Button = styled.button`
    cursor: pointer;
    
`