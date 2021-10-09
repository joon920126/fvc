import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components'
import StyledButton from '../components/Button';
import StyledInput from '../components/input';

const Login = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const history = useHistory()

    const onIdChange = (e) => setId(e.target.value)
    const onPwChange = (e) => setPw(e.target.value)
    const login = () => {
        if(id === 'nextsteps' && pw === 'fvc123') {
            history.push('/main')
        } else {
            alert('Login error.\nPlease try again.')
        }
    }

    return ( 
        <Wrapper>
            <Container>
                FVC Next Steps
                    <StyledInput type='text' onChange={onIdChange} onSubmit={login} title="ID" />
                    <StyledInput type='password' onChange={onPwChange} onSubmit={login} title="Password" />
                    <StyledButton text='Submit' onClick={login} />
            </Container>
        </Wrapper>
     );
}
 
export default Login;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 300px;
    height: 240px;
    border: 1px solid black;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

