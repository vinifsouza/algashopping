import React from 'react'
import { Container, Wrapper } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer/AppContainer'

function App(){
    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={<div>produtos disponiveis</div>}
                middle={<div>sua lista de compras</div>}
                right={<div>estatisticas</div>}
            />
        </Container>
    </Wrapper>
}

export default App