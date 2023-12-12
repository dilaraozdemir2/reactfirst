import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerBlogs: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/bloglar')
      .then((response) => response.json())
      .then((data) => {
        console.log('Gelen veri:', data);
        if (data) {
          const bannerBlogs = data.filter((blog) => blog.banner === '1');
          this.setState({ bannerBlogs: bannerBlogs });
        } else {
          this.setState({ error: 'API verisi beklenen formatta değil' });
        }
      })
      .catch((error) => {
        console.error('Veri çekme hatası:', error);
        this.setState({ error: 'Veri çekme hatası' });
      });
  }

  render() {
    const { bannerBlogs, error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <div className="container-fluid paddding mb-5">
          <div className="row mx-0">
            <div className="col-md-12">
              <Carousel>
                {bannerBlogs.map((blog, index) => (
                  <Carousel.Item key={index}>
                    <img className="d-block w-100" src={blog.resim} alt={`Slide ${index}`} />
                    <Carousel.Caption>
                      <h3>{blog.baslik}</h3>
                      <p>{blog.date}</p>
                      <button onClick={() => this.props.onBlogClick(blog)} className="btn btn-primary">
                        Detay
                      </button>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Headline;
