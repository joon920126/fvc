import React from 'react';
import styled from 'styled-components'

const StyledInput = ({type, title, onChange, onSubmit}) => {
    const checkEnter = (e) => {
        if(e.key === 'Enter') {
            onSubmit()
        }
    }

    return ( 
        <Wrapper>
            <Title>{title}</Title>
            <Input type={type} onChange={onChange} onKeyDown={checkEnter} />
        </Wrapper>
     );
}
 
export default StyledInput;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const Title = styled.div`
    margin-right: 16px;
`

const Input = styled.input`
    
`  