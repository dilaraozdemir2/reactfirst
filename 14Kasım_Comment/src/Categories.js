// React ve gerekli bileşenlerin içe aktarılması
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

// Categories bileşeni oluşturuluyor ve Component sınıfından kalıtım alıyor
export default class Categories extends Component {
  // Bileşen durumu için başlangıç durumu tanımlanıyor
  state = {
    categories: [], // Kategoriler başlangıçta boş bir dizi olarak tanımlanıyor
  };

  // Bileşen oluşturulduktan sonra yapılacak işlemler burada gerçekleştiriliyor
  componentDidMount() {
    this.getCategories(); // getCategories fonksiyonu çağrılarak kategoriler getiriliyor
  }

  // Kategorileri getirmek için API'ye yapılan istek
  getCategories = () => {
    // fetch fonksiyonu kullanılarak belirtilen URL'den kategoriler getiriliyor
    fetch("http://localhost:3000/categories")
      .then((response) => response.json()) // Gelen yanıt JSON formatına dönüştürülüyor
      .then((data) => this.setState({ categories: data })); // Gelen veri bileşen durumuna atanıyor
  };

  // Bileşenin görünümünü oluşturan fonksiyon
  render() {
    return (
      <div>
        {/* Kategorilerin listelendiği bir ListGroup oluşturuluyor */}
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              // Etkin kategori kontrol edilerek, aktifse true değeri atanıyor
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              // Kategoriye tıklama işlemi ve şu anki kategoriyi değiştirme fonksiyonu tetikleniyor
              onClick={() => this.props.chanceCategory(category)}
              key={category.id} // Kategorinin benzersiz anahtarı belirleniyor
            >
              {category.categoryName} {/* Kategori adı listeleniyor */}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
