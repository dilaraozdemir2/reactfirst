// React ve gerekli bileşenlerin import edilmesi
import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Cart from "./Cart"; // Cart bileşeninin import edilmesi
import Logo from './logo.png'; // Logo resminin import edilmesi

// Header bileşeni, React bileşenlerinden biri olarak tanımlanıyor
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    // Toggle işlevinin bağlanması ve bileşenin başlangıç durumu tanımlanıyor
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false, // Navbar'ın açık/kapalı durumu
    };
  }

  // Navbar'ın açık/kapalı durumunu değiştiren fonksiyon
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // Bileşenin render fonksiyonu, bileşenin görüntüsünü oluşturuyor
  render() {
    return (
      <div>
        {/* Bootstrap Navbar bileşeni */}
        <Navbar color="light" light expand="md">
          {/* Navbar markası ve logonun eklenmesi */}
          <NavbarBrand href="/">
            <img src={Logo} alt="Logo" style={{ width: '150px' }} />
          </NavbarBrand>
          {/* Navbar'ı açıp kapatan buton */}
          <NavbarToggler onClick={this.toggle} />
          {/* Navbar menüsü */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* Navbar üzerindeki bağlantılar */}
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              {/* Sepet bileşeninin eklenmesi */}
              <Cart
                cart={this.props.cart} // Props olarak "cart" verisi
                removeToCart={this.props.removeToCart} // Props olarak "removeToCart" fonksiyonu
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
