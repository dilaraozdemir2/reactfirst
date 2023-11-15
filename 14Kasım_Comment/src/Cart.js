import React, { Component } from "react"; // React ve Component bileşenlerinin import edilmesi
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"; // Reactstrap bileşenlerinin import edilmesi

// Cart bileşeni, Sepet öğesini temsil eder ve React bileşenlerinden biri olarak tanımlanır
export default class Cart extends Component {
  render() {
    return (
      <UncontrolledDropdown nav inNavbar>
        {/* Sepet dropdown bileşeni */}
        <DropdownToggle nav caret>
          Sepet - {this.props.cart.length} {/* Sepetteki ürün sayısını gösterir */}
        </DropdownToggle>
        {/* Sepet içeriği dropdown menüsü */}
        <DropdownMenu right>
          {/* Sepetteki her bir ürün için bir dropdown öğesi oluşturulur */}
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {/* Ürünü sepetten çıkaran buton */}
              <span
                onClick={() => this.props.removeToCart(cartItem.product)}
                className="badge badge-danger"
                style={{ marginRight: "10px", backgroundColor: "red" }}
              >
                X
              </span>
              {/* Ürün adı */}
              {cartItem.product.productName}
              {/* Ürün miktarı */}
              <span
                className="badge badge-warning"
                style={{ backgroundColor: "green" }}
              >
                {cartItem.quantity}
              </span>
            </DropdownItem>
          ))}

          {/* Dropdown menüsünde bir ayırıcı */}
          <DropdownItem divider />
          {/* Sepeti boşaltan seçenek */}
          <DropdownItem>Sepeti Boşalt</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
