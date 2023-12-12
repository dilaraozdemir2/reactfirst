import React, { Component } from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row,
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,//boostrap

            kategorilerData: [],
            selectedCategoryId: null,
            newUserName: '', // Kullanıcı adı alanı
            newUserSurname: '' // Kullanıcı soyadı alanı
        };
        this.toggle = this.toggle.bind(this);//boostrap
    }


    componentDidMount() {
        fetch("http://localhost:3000/kategoriler")
            .then(response => response.json())
            .then(data => {
                this.setState({ kategorilerData: data });
            })
            .catch(error => console.error("Veri çekme hatası:", error));
    }


    categoryClick = (a) => {//a parametresi butona tıklandığında return den katagori.id ydeğerini alır ve selectedCategoriId değerini günceller
        console.log('Seçilen kategori:', a);
        this.props.onCategorySelect(a);
    };





    toggle() {//boostrap
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };



    // Yeni kullanıcı adını güncelleme fonksiyonu
    handleUserNameChange = (e) => {
        this.setState({ newUserName: e.target.value });
    };

    // Yeni kullanıcı soyadını güncelleme fonksiyonu
    handleUserSurnameChange = (e) => {
        this.setState({ newUserSurname: e.target.value });
    };

    // Kullanıcı ekleme işlemi
    addUser = () => {
        const { newUserName, newUserSurname } = this.state;
        // Yeni kullanıcı bilgilerini al ve gerekli işlemleri yap
        const newUser = {
            name: newUserName,
            surname: newUserSurname
        };

        console.log('Yeni kullanıcı:', newUser);

        // Kullanıcı eklendikten sonra inputları temizleme
        this.setState({ newUserName: '', newUserSurname: '' });
    };

    render() {
        return (
            <div>
                <Row className="mx-0 ">
                    <Col className="col-10">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                            <div className="container-fluid ">
                                <a className="navbar-brand" href="#">Gezi Blog</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav ml-auto">
                                        {this.state.kategorilerData.map((kategori, index) => (
                                            <li key={index}>
                                                <Button outline onClick={() => this.categoryClick(kategori.id)}>
                                                    {kategori.ad}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </nav>
                    </Col>
                    <Col className="col-2 d-flex justify-content-end">
                        <Form className="">
                            <FormGroup>
                                
                                <Input type="text" name="userName" id="userName" placeholder="Adınızı girin" value={this.state.newUserName} onChange={this.handleUserNameChange} />
                            </FormGroup>
                            <FormGroup>
                                
                                <Input type="text" name="userSurname" id="userSurname" placeholder="Soyadınızı girin" value={this.state.newUserSurname} onChange={this.handleUserSurnameChange} />
                            </FormGroup>
                            <Button color="primary" onClick={this.addUser}>Kullanıcı Ekle</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
