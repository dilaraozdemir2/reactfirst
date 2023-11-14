import React from 'react'
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  zIndex,
} from 'reactstrap';


function Category({kategoriler}) {
  return (
    <div className='col-md-3' style={{ position: 'sticky', top: 0 , height: '100vh', zIndex: 1}}> 
      <ListGroup flush>
        <ListGroupItemHeading>
          Kategoriler
        </ListGroupItemHeading>
        {kategoriler.map((item, id) =>
                    <ListGroupItem
                        key= {id}
                        href="#"
                        tag="a"
                    >
                        {item.ad}
                    </ListGroupItem>
                )}
      </ListGroup>
    </div>
  )
}

export default Category;
