import React, { useState } from 'react'
    import { Routes, Route } from 'react-router-dom'
    import Header from './components/Header'
    import Footer from './components/Footer'
    import Home from './pages/Home'
    import Cart from './pages/Cart'
    import ProductDetail from './pages/ProductDetail'
    import styled from 'styled-components'

    const AppContainer = styled.div`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    `

    const MainContent = styled.main`
      flex-grow: 1;
    `

    function App() {
      const [cart, setCart] = useState([])

      const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id)
        if (existingProduct) {
          setCart(cart.map(item => 
            item.id === product.id 
              ? {...item, quantity: item.quantity + 1} 
              : item
          ))
        } else {
          setCart([...cart, {...product, quantity: 1}])
        }
      }

      const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId))
      }

      return (
        <AppContainer>
          <Header cartItemCount={cart.length} />
          <MainContent>
            <Routes>
              <Route 
                path="/" 
                element={<Home addToCart={addToCart} />} 
              />
              <Route 
                path="/product/:id" 
                element={<ProductDetail addToCart={addToCart} />} 
              />
              <Route 
                path="/cart" 
                element={
                  <Cart 
                    cart={cart} 
                    removeFromCart={removeFromCart} 
                    setCart={setCart} 
                  />
                } 
              />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      )
    }

    export default App
