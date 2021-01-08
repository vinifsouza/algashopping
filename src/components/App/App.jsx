import React, { useState } from 'react'
import { Container, Wrapper } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import Checkbox from '../../shared/Checkbox/Checkbox'

function App(){
    const [lettuce, setLettuce] = useState()
    const [rice, setRice] = useState()



    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={<div>
                    produtos disponiveis

                    <Checkbox
                        value = {lettuce}
                        title='Alface'
                        onClick={ () => setLettuce(!lettuce)}
                    />

                    <Checkbox
                        value = {rice}
                        title='Arroz'
                        onClick={ () => setRice(!rice)}
                    />
                    
                    </div>}

                middle={<div>sua lista de compras</div>}
                right={<div>estatisticas</div>}
            />
        </Container>
    </Wrapper>
}

export default App