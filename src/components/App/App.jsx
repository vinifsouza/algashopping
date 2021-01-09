import React, { useState, useEffect } from 'react'
import { Container, Wrapper } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import LineChart from '../../shared/LineChart/LineChart'
import ShoppingList from '../ShoppingList/ShoppingList'
import productsMock from '../../mocks/products.json'
import extractPercentage from '../../utils/extractPercentage'

function App(){
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']
    
    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState([])

    useEffect(() => {
        const newSelectedProducts = products
        .filter(products => products.checked)

        setSelectedProducts(newSelectedProducts)
    }, [products])

    useEffect(() => {
        const total = selectedProducts
        .map(product => product.price)
        .reduce((a, b) => a + b, 0)
        
        setTotalPrice(total)
        
    }, [selectedProducts])

    function handleToggle (id, checked) {
        const newProducts = products.map(product => 
            product.id === id
            ? {...product, checked: !product.checked}
            : product
        )
        setProducts(newProducts)
    }

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={
                <ShoppingList 
                    title='Produtos disponíveis'
                    products={products}
                    onToggle={handleToggle}
                />}

                middle={
                <ShoppingList 
                    title='sua lista de compras' 
                    products={selectedProducts}
                    onToggle={handleToggle}
                />}
                    
                right={<div>
                    <h2 style={{ fontWeight: 400, fontSize: 18, color: '#004D61', textTransform: 'lowercase',  height: 32}}>
                        estatísticas:
                    </h2>

                    <LineChart 
                        color={colors[0]} 
                        title='saudável'
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                            .filter(product => product.tags.includes('healthy'))
                            .length
                        )} 
                    />
                    <LineChart 
                        color={colors[1]} 
                        title='não tão saudável'
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                            .filter(product => product.tags.includes('junk'))
                            .length
                        )} 
                    />
                    <LineChart 
                        color={colors[2]} 
                        title='limpeza'
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                            .filter(product => product.tags.includes('cleaning'))
                            .length
                        )} 
                    />
                    <LineChart 
                        color={colors[3]} 
                        title='outros'
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                            .filter(product => product.tags.includes('others'))
                            .length
                        )} 
                    />
                    <div style={{ marginTop: 12 }}>
                            <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
                                previsão de gastos:
                            </h2>
                            <div style={{ fontSize: 24 }}>
                                { 'R$ ' + totalPrice.toLocaleString('pt-br') }
                            </div>
                    </div>

                </div>}
            />
        </Container>
    </Wrapper>
}

export default App