
import React, { Component } from 'react';
import Tags from "./Tags";
import Popular from "./Popular";
import Modal from "./Modal";

class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            error: null,
            comments: {}, // Yorumları saklamak için bir obje
            users: ["Selahaddin", "Dilara", "Aslı"], // Kullanıcı listesi
            selectedUser: null, // Seçilen kullanıcı
            commentText: "", // Yorum metni
        };
    }

    componentDidMount() {
        this.fetchBlogs();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedCategory !== this.props.selectedCategory) {
            this.fetchBlogs();
        }
    }

    fetchBlogs() {

        const apiUrl = this.props.selectedCategory
            ? `http://localhost:3000/bloglar?kategoriId=${this.props.selectedCategory}`
            : 'http://localhost:3000/bloglar';

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('Gelen veri:', data);
                if (data) {
                    this.setState({ blogs: data });
                } else {
                    this.setState({ error: 'API verisi beklenen formatta değil' });
                }
            })
            .catch((error) => {
                console.error('Veri çekme hatası:', error);
                this.setState({ error: 'Veri çekme hatası' });
            });
    }




    // Yorum ekleme fonksiyonu
    addComment = (blogId) => {
        const { comments, selectedUser, commentText } = this.state;
        const comment = {
            user: selectedUser,
            text: commentText,
        };

        // Eğer blog için daha önce yorum yapılmışsa var olan yorumları al, yoksa boş bir dizi oluştur
        const blogComments = comments[blogId] ? [...comments[blogId], comment] : [comment];

        // Yapılan yorumları güncelle
        this.setState({
            comments: {
                ...comments,
                [blogId]: blogComments,
            },
            commentText: "", // Yorum input'unu temizle
        });
    };

    // Kullanıcı seçme fonksiyonu
    handleUserSelect = (user) => {
        this.setState({ selectedUser: user });
    };

    // Yorum input'una girilen metni güncelleme fonksiyonu
    handleCommentTextChange = (e) => {
        this.setState({ commentText: e.target.value });
    };




    render() {
        const { blogs, error, comments, users, selectedUser, commentText } = this.state;

        if (error) {
            return <div>{error}</div>;
        }

        return (
            <div className="row mx-0">
                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">

                    <div>
                        <div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">Yeni Yerler Keşfet
                        </div>
                    </div>
                    <Popular onBlogClick={this.props.onBlogClick} />
                </div>

                <div className="col-md-9 animate-box" data-animate-effect="fadeIn">


                    <div className="container-fluid pb-4 pt-4 paddding">

                        {blogs.map((blog, index) => (
                            <div key={index} className="row pb-4" onClick={() => this.props.onBlogClick(blog)}>
                                <div className="col-md-5">
                                    <div className="fh5co_hover_news_img">
                                        <div className="fh5co_news_img">
                                            <img src={blog.resim} alt="" />
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="col-md-7 animate-box">
                                    <h3 className="fh5co_magna py-2" onClick={(e) => e.preventDefault()}>
                                        {blog.baslik}
                                    </h3>
                                    <a href="test" className="fh5co_mini_time py-3">
                                        {blog.author} - {blog.tarih}
                                    </a>
                                    <div className="fh5co_consectetur">{blog.aciklama}</div>

                                    <div className="fh5co_consectetur">
                                        <i className="fa fa-heart-o"></i> {blog.favoriSayisi}
                                    </div>

                                    <div className="fh5co_consectetur">
                                        <i className="fa fa-clock-o"></i> {blog.date}
                                    </div>

                                    <div className="fh5co_consectetur">
                                        
                                        <div className="clearfix"></div>
                                    </div>
                                    {/* Yorum yapma alanı */}
                                    <div className="col-md-12 animate-box" onClick={(e) => e.stopPropagation()}>
                                        <input
                                            type="text"
                                            placeholder="Yorumunuzu buraya yazın..."
                                            value={commentText}
                                            onChange={this.handleCommentTextChange}
                                        />
                                        <select onChange={(e) => this.handleUserSelect(e.target.value)} value={selectedUser || ''}>
                                            <option value="" disabled>Yorum Yapacak Kullanıcıyı Seçin</option>
                                            {users.map((user, index) => (
                                                <option key={index} value={user}>{user}</option>
                                            ))}
                                        </select>
                                        <button onClick={() => this.addComment(blog.id)}>Yorum Gönder</button>
                                        {/* Bloga ait yorumları listeleme */}
                                        {comments[blog.id] && comments[blog.id].map((comment, idx) => (
                                            <div key={idx}>
                                                <p>Kullanıcı: {comment.user}</p>
                                                <p>Yorum: {comment.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>



                {this.props.selectedBlog && (
                    <Modal blog={this.props.selectedBlog} onClose={this.props.onClose}
                        showModal={this.props.showModal} bloglar={this.fetchBlogs} />
                )}
            </div>


        )
            ;
    }
}

export default Blogs;
