import React from 'react'
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from 'reactstrap';

function Category() {
  return (
    <div>
      <ListGroup flush>
        <ListGroupItemHeading>
          Kategoriler
        </ListGroupItemHeading>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Dapibus ac facilisis in
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Morbi leo risus
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Porta ac consectetur ac
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Vestibulum at eros
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default Category;
