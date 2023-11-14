import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';

import './App.css';

function Header({ cart, removeFromCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const totalAmount = cart.reduce((total, product) => total + parseFloat(product.price), 0);

  return (
    <div className='sticky-top'>
      <Navbar color="light" light expand="md" className='ps-5 pe-5' style={{ zIndex: 100 }}>
        <NavbarBrand href="/" className="mr-auto">Marka İsmi</NavbarBrand>
        <NavbarToggler onClick={toggle} className="ml-auto" />
        <Collapse isOpen={isOpen} navbar className='justify-content-end'>
          {/* //div in içindeki elemanları sağa yaslar justify-content-end*/}
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink href="#">Kategoriler</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Ürünler</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">İletişim</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className='ml-auto'>
              <DropdownToggle nav caret>
                Sepet ({cart.length})
              </DropdownToggle>
              <DropdownMenu end className="text-right">
                {cart.map((item, index) => (
                  <DropdownItem key={index} >
                    {item.name} : {item.price} {' '} <Button onClick={() => removeFromCart(index)} color="danger">  sil </Button> {' '}
                  </DropdownItem>
                ))}
                <DropdownItem>
                  Toplam: {totalAmount.toFixed(2)} TL {/* toplam tutarı belirli bir sayıda ondalık basamağa yuvarlamak için */}
                </DropdownItem>
                <DropdownItem>
                {' '} <Button color="info"> Ürün Ekle </Button> {' '}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;