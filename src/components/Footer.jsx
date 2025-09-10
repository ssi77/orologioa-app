import React from 'react'
    import styled from 'styled-components'
    import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

    const FooterContainer = styled.footer`
      background-color: #333;
      color: white;
      padding: 2rem;
      text-align: center;
    `

    const SocialIcons = styled.div`
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 1rem;

      a {
        color: white;
        font-size: 1.5rem;
        transition: color 0.3s ease;

        &:hover {
          color: #ddd;
        }
      }
    `

    function Footer() {
      return (
        <FooterContainer>
          <p>&copy; 2023 Orologi di Lusso. Tutti i diritti riservati.</p>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </SocialIcons>
        </FooterContainer>
      )
    }

    export default Footer
