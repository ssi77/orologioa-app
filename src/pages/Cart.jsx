import React from 'react'
    import styled from 'styled-components'
    import { FaTrash } from 'react-icons/fa'

    const CartContainer = styled.div`
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    `

    const CartItem = styled.div`
      display: flex;
      align-items: center;
      background: white;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    `

    const CartItemImage = styled.img`
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-right: 1rem;
    `

    const CartItemDetails = styled.div`
      flex-grow: 1;
    `

    const QuantityControl = styled.div`
      display: flex;
      align-items: center;
      gap: 10px;
    `

    const Button = styled.button`
      background-color: #333;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    `

    const TotalContainer = styled.div`
      text-align: right;
      margin-top: 2rem;
      font-size: 1.2rem;
      font-weight: bold;
    `

    function Cart({ cart, removeFromCart, setCart }) {
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

      const updateQuantity = (id, newQuantity) => {
        if (newQuantity > 0) {
          setCart(cart.map(item => 
            item.id === id 
              ? {...item, quantity: newQuantity} 
              : item
          ))
        }
      }

      return (
        <CartContainer>
          <h1>Il Tuo Carrello</h1>
          {cart.length === 0 ? (
            <p>Il carrello è vuoto</p>
          ) : (
            <>
              {cart.map(item => (
                <CartItem key={item.id}>
                  <CartItemImage src={item.image} alt={item.name} />
                  <CartItemDetails>
                    <h3>{item.name}</h3>
                    <p>€{item.price.toLocaleString()}</p>
                    <QuantityControl>
                      <Button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                      <span>{item.quantity}</span>
                      <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                    </QuantityControl>
                  </CartItemDetails>
                  <Button onClick={() => removeFromCart(item.id)}>
                    <FaTrash /> Rimuovi
                  </Button>
                </CartItem>
              ))}
              <TotalContainer>
                Totale: €{total.toLocaleString()}
              </TotalContainer>
            </>
          )}
        </CartContainer>
      )
    }

    export default Cart
