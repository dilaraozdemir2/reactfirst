import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardGroup,
  CardTitle,
  Button,
  Col,
} from "reactstrap";

// Products bileşeni, React bileşenlerinden biri olarak tanımlanıyor
export default class Products extends Component {
  render() {
    // Props'tan gelen 'products' ve 'currentCategory' değerleri alınıyor
    const { products } = this.props;
    return (
      <div>
        {/* Kategoriyi gösteren başlık */}
        <h2>{this.props.currentCategory}</h2>
        {/* Ürün kartlarını gruplayan bir CardGroup bileşeni */}
        <CardGroup>
          {/* Her ürün için bir kart oluşturuluyor */}
          {products.map((product) => (
            <Col xs="3" key={product.id}>
              {/* Her ürün için bir kart oluşturuluyor */}
              <Card
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                {/* Ürün resmi */}
                <CardImg
                  top
                  width="100%"
                  src={product.image}
                  alt={product.productName}
                />
                <CardBody>
                  {/* Ürün başlığı */}
                  <CardTitle>{product.productName}</CardTitle>
                  {/* Ürün açıklaması */}
                  <CardText>{product.desc}</CardText>
                  {/* Ürün fiyatı */}
                  <CardText>
                    <small className="text-muted">{product.price} ₺</small>
                  </CardText>
                  {/* Sepete ekle butonu */}
                  <Button onClick={() => this.props.addToCart(product)}> 
                    Sepete Ekle
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    );
  }
}
