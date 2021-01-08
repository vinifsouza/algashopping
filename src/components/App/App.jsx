import React, { useState, useEffect } from 'react'
import { Container, Wrapper } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import Checkbox from '../../shared/Checkbox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'

function App(){
    const [lettuce, setLettuce] = useState()
    const [rice, setRice] = useState()
    const [healthy, setHealthy] = useState(20)
    
    useEffect(function () {
        setTimeout( () => {
            setHealthy(80)
        }, 5000)
    }, [])

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

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

                middle={<div>
                    sua lista de compras
                    </div>}
                    
                right={<div>
                    estatisticas

                    <LineChart color={colors[0]} title='saudável' percentage={healthy} />
                    <LineChart color={colors[1]} title='não tão saudável' percentage={20} />
                    <LineChart color={colors[2]} title='limpeza' percentage={35} />
                    <LineChart color={colors[3]} title='outros' percentage={15} />
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App