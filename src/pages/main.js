import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import sample from '../utils/sample';

const Main = () => {

    const [list, setList] = useState([])

    const [modal, setModal] = useState('none')

    useEffect(() => {
        setList(sample)
    }, [])
    return ( 
        <Wrapper>
            <Title><h1>FVC next steps</h1></Title>
            <Table>
                <thead>
                    <tr>
                        <th>IsContacted</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Card</th>
                        <th>ReferTo</th>
                    </tr>
                </thead>
                <tbody>
                    {sample.map(item => {
                        return <tr>
                            <td><input type="checkbox" className="contact-checkbox" checked={item.isContacted}/></td>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.contact}</td>
                            <td><div className="card">
                                <div className="card-checkbox" onClick={() => setModal('grow')}>
                                    <input type="checkbox" checked={item.grow}/> Grow
                                </div>
                                <div className="card-checkbox" onClick={() => setModal('connect')}>
                                    <input type="checkbox" checked={item.connect}/> Connect
                                </div>
                                <div className="card-checkbox" onClick={() => setModal('serve')}>
                                    <input type="checkbox" checked={item.serve}/> Serve
                                </div>
                                <div className="card-checkbox" onClick={() => setModal('prayer')}>
                                    <input type="checkbox" checked={item.prayer}/> Prayer
                                </div>
                                </div></td>
                            <td>{item.referTo}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Wrapper>
     );
}
 
export default Main;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`

const Table = styled.table`
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    tr {
    }
    td {
        border-top: 1px solid lightgray;
        padding: 16px;
    }
    th {
        padding: 16px;
    }
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .card-checkbox {
        cursor: pointer;
        margin-right: 16px;
    }
`

const Title = styled.div`
    width: 100%;
    text-align: center;

`