import React, { useState } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button

} from 'reactstrap';

function Urunler({ urunler, addToCart }) {
  
  return (
    <div className='col-md-9 row'>
      {urunler.map((urun) => (
      <Card
        key={urun.id}
        style={{
          width: '18rem',
          margin: '10px'
        }}
      >
        <img
          alt={urun.name}
          src={urun.image}  
        />
        <CardBody>
          <CardTitle tag="h5">
            {urun.name}
          </CardTitle>
          
          <CardText className='color'>
            Fiyat: {urun.price}
          </CardText>
          <Button onClick={() => addToCart(urun)}>
            Sepete Ekle
          </Button>
        </CardBody>
      </Card>
      ))}
    </div>
  )
}

export default Urunler
