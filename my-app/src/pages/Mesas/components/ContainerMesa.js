import styled from 'styled-components'


function ContainerMesa({mesa, temperatura, status}) {

    return (
        <CaixaLi>
            <DivTitulo>
            <Titulo>{mesa}</Titulo>
            </DivTitulo> 
            <Media/>
            <CaixaTexto> 
                <DescricaoAbrigo> Temp: {temperatura} </DescricaoAbrigo>
                <DescricaoAbrigo>Status: {status}</DescricaoAbrigo>

            </CaixaTexto>

        </CaixaLi>
    )
}

export default ContainerMesa;

const CaixaLi = styled.li`
    display: inline-block;
    list-style: none;
    width: 30%;
    vertical-align: top;
    margin: 1.5% 1.5%;
    box-sizing:border-box ;
    /* border: 1.5px solid #000000; */
    box-shadow: 0px 2px 23px #26395338;
    border-radius: 5px;
`

const DivTitulo = styled.div`
background-color: gray;
align-items: center;
`
const Titulo = styled.h2`
    vertical-align: middle;
    padding: 10px;
    font-weight: bolder;

`

const Media = styled.div`
    background: url("https://th.bing.com/th/id/OIP.BMWsryGKGD_9dVViNV1a3AHaE6?pid=ImgDet&rs=1")center/cover;
    height: 150px;
    width: auto;
` 


const CaixaTexto = styled.div`
    padding: 10px;
`
const DescricaoAbrigo = styled.p`
    font-size: var(--descricao);
    color: var(--primary);
    margin-bottom: 10px;
`