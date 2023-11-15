import React from "react"; // React kütüphanesinin import edilmesi
import { Component } from "react"; // React Component bileşeninin import edilmesi
import Categories from "./Categories"; // Categories bileşeninin import edilmesi
import Products from "./Products"; // Products bileşeninin import edilmesi
import Header from "./Header"; // Header bileşeninin import edilmesi
import { Col, Container, Row } from "reactstrap"; // Reactstrap bileşenlerinin import edilmesi


// her bir vs-code projesinde 1 port db.jsondost-yası(veriler) için 1 port da çalıştırdığın siteyi görmek için açıyorsun
//db.json kodunu terminale cd jsonproject,  Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope Process, json-server --watch db.json kolarını yadık
// npm start ile başka terminalde kodları çalıştırdık.


// App bileşeni, React bileşenlerinden biri olarak tanımlanıyor
export default class App extends Component {
  // Bileşenin başlangıç durumu (initial state)
  state = {
    currentCategory: "", // Şu anki kategori
    products: [], // Ürünler
    cart: [], // Sepet
  };

  // Kategori değiştiğinde çağrılan fonksiyon
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName }); // Kategori değiştiriliyor
    this.getProducts(category.id); // Yeni kategoriye göre ürünleri getir
  };

  // Belirli bir kategoriye ait ürünleri getiren fonksiyon
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data })); // Ürünler state'e atanıyor
  };

  // Bileşen oluşturulduğunda ilk olarak çağrılan fonksiyon
  componentDidMount() {
    this.getProducts(); // Tüm ürünleri başlangıçta getir
  }

  // Sepete ürün ekleyen fonksiyon
  addToCart = (product) => {
    let newCart = this.state.cart; // Mevcut sepet
    var addedItem = newCart.find((c) => c.product.id === product.id); // Eklenecek ürün var mı?

    if (addedItem) {
      addedItem.quantity += 1; // Eğer varsa, miktarı artır
    } else {
      newCart.push({ product: product, quantity: 1 }); // Yoksa, yeni ürünü sepete ekle
    }
    this.setState({ cart: newCart }); // Yeni sepet state'e atanıyor
  };

  // Sepetten ürün çıkaran fonksiyon
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id); // Belirli bir ürünü sepetten filtrele
    this.setState({ cart: newCart }); // Yeni sepet state'e atanıyor
  };

  // Bileşenin görünümünü oluşturan fonksiyon
  render() {
    return (
      <Container>
        {/* Üstbilgi (Header) bileşeni */}
        <Header cart={this.state.cart} removeToCart={this.removeFromCart} />
        <Row>
          {/* Kategoriler bileşeni */}
          <Col xs="3">
            <Categories
              changeCategory={this.changeCategory}
              currentCategory={this.state.currentCategory}
            />
          </Col>
          {/* Ürünler bileşeni */}
          <Col xs="9">
            <Products
              addToCart={this.addToCart}
              products={this.state.products}
              currentCategory={this.state.currentCategory}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}