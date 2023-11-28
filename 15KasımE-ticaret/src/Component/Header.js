import React, { Component } from "react";
import {
    Button,
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,//boostrap

            kategorilerData: [],
            selectedCategoryId: null,
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
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className ="container-fluid">
                        <a className="navbar-brand" href="#">TECHNOLARA</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                {this.state.kategorilerData.map((kategori, index) => (
                                    <li key={index}>
                                        <Button outline
                                        onClick={() => this.categoryClick(kategori.id)}
                                        >
                                            {kategori.ad} 

                                        </Button>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
