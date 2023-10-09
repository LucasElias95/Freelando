import styled from '@emotion/styled'


export const Cabecalho = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
`
export const Rodape = styled.footer`
background: ${props => props.theme.cores.primarias.a};
padding: ${props => props.theme.espacamentos.xl};
color: ${props => props.theme.cores.branco};
`

const DivEstilizada = styled.div`
    padding: ${props => props.theme.espacamentos.l};
    background: ${props => props.theme.cores.secundarias.a};
    border: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    border-radius: ${props => props.theme.espacamentos.s};
`
export const Card = ({ children }) => {
    return (<DivEstilizada>
        {children}
    </DivEstilizada>)
}