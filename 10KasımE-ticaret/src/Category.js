import React from 'react'
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  zIndex,
} from 'reactstrap';


function Category() {
  return (
    <div className='col-md-3' style={{ position: 'sticky', top: 0 , height: '100vh', zIndex: 1}}> 
      <ListGroup flush>
        <ListGroupItemHeading>
          Kategoriler
        </ListGroupItemHeading>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Yeni Ürünler
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Dış Giyim
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Üst Giyim
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Alt Giyim
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Aksesuar
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default Category;
