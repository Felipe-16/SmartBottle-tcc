import React from 'react'
import styled from 'styled-components'



const Cabecalho = () => {
    return (
        <Header>
            <Opcoes href='/'>Mesas</Opcoes>
            

        </Header>

    )
}


export default Cabecalho


const Header = styled.header`
    padding: 10px;
    color: white;
    display: flex;
    justify-content: space-between;
    background-color: var(--primary);
    text-align: center;
    margin-top: 0px;
`
const Opcoes = styled.a`
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    padding-right: 10px;
    color: White;

`
