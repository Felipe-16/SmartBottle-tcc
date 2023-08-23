import React, { Component } from "react";
import ContainerMesa from './components/ContainerMesa'
import styled from 'styled-components'

const Container =styled.ul`
    width: 90%;
    margin: 0 auto;
    padding: 50px 0;
`

function Mesa () {

    // const [realocacoes, setRealocacoes] = useState([])

    // useEffect(() => {
    //     axios.get("http://localhost:6000/realocacao")
    //         .then(((response) => {
    //             setDoacoes(response.data)
    //         }))
    //         .catch(() => {
    //             console.log('deu errado')
    //         })
    // }, [])


        return (
            <Container>
                <ContainerMesa
                    mesa={"Numero da Mesa: 1"}
                    temperatura = {"20"}
                    status={"Cheia"}
                />
                <ContainerMesa
                    mesa={"Numero da Mesa: 2"}
                    temperatura = {"20"}
                    status={"Cheia"}
                />
                <ContainerMesa
                    mesa={"Numero da Mesa: 3"}
                    temperatura = {"20"}
                    status={"Cheia"}
                />
            </Container>

        )
    }


export default Mesa