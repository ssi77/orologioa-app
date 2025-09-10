import React from 'react'
    import { Link } from 'react-router-dom'
    import styled from 'styled-components'
    import { FaShoppingCart, FaWatch } from 'react-icons/fa'

    const HeaderContainer = styled.header`
      background-color: #333;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `

    const Logo = styled.div`
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;

      svg {
        margin-right: 10px;
      }
    `

    const NavLinks = styled.nav`
      display: flex;
      align-items: center;
      gap: 20px;

      a {
        color: white;
        transition: color 0.3s ease;

        &:hover {
          color: #ddd;
        }
      }
    `

    const CartIcon = styled(Link)`
      position: relative;
      display: flex;
      align-items: center;
    `

    const CartBadge = styled.span`
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: red;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
    `

    function Header({ cartItemCount }) {
      return (
        <HeaderContainer>
          <Logo>
            <FaWatch />
            Orologi di Lusso
          </Logo>
          <NavLinks>
            <Link to="/">Home</Link>
            <CartIcon to="/cart">
              <FaShoppingCart />
              {cartItemCount > 0 && (
                <CartBadge>{cartItemCount}</CartBadge>
              )}
            </CartIcon>
          </NavLinks>
        </HeaderContainer>
      )
    }

    export default Header
