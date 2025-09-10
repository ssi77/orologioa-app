import React from 'react'
    import styled from 'styled-components'
    import { Link } from 'react-router-dom'

    const watches = [
      { 
        id: 1, 
        name: 'Rolex Submariner', 
        price: 12000, 
        image: '/rolex-submariner.jpg' 
      },
      { 
        id: 2, 
        name: 'Omega Speedmaster', 
        price: 5500, 
        image: '/omega-speedmaster.jpg' 
      },
      { 
        id: 3, 
        name: 'Tag Heuer Carrera', 
        price: 4200, 
        image: '/tag-heuer-carrera.jpg' 
      }
    ]

    const ProductGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 2rem;
    `

    const ProductCard = styled.div`
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    `

    const ProductImage = styled.img`
      width: 100%;
      height: 250px;
      object-fit: cover;
    `

    const ProductInfo = styled.div`
      padding: 1rem;
      text-align: center;
    `

    const ProductActions = styled.div`
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    `

    const Button = styled.button`
      background-color: #333;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #555;
      }
    `

    function Home({ addToCart }) {
      return (
        <ProductGrid>
          {watches.map(watch => (
            <ProductCard key={watch.id}>
              <ProductImage src={watch.image} alt={watch.name} />
              <ProductInfo>
                <h3>{watch.name}</h3>
                <p>€{watch.price.toLocaleString()}</p>
                <ProductActions>
                  <Link to={`/product/${watch.id}`}>
                    <Button>Dettagli</Button>
                  </Link>
                  <Button onClick={() => addToCart(watch)}>
                    Aggiungi al Carrello
                  </Button>
                </ProductActions>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      )
    }

    export default Home
