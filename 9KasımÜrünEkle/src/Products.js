import React, { useState } from 'react'

function Products() {
    const [productList, setProductList] = useState([]);
    //alttakiler aslında yeni ekleyeceğim ürün için hazırladığım inputlar ve o yeniürünütemsil ediyorlar
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [ID, setID] = useState(0);

    const addProduct = () => {
        // şu an yeni bir ürün ekleyeceğimiz için onun içeriğini hazırlyoruz ona ait ıd, name.. listeye ekleyeceğiz
        // bu ekleme işi bitince sonrasında da inputların içeriğini boşaltıyoruz
        if (productName && productPrice) {
            setID(ID + 1);//yeni ve henüz kullanılmamış bir id atıyoruz
            setProductList([...productList, { ID: ID, Name: productName, Price: productPrice, Description: productDescription }]);
            setProductName('')
            setProductPrice('')
            setProductDescription('')
        }
    };



    return (
        <div>
            {/* --1-- boostrap input divi */}
            {/* e input u kapsıyor orada yaptığımız tüm değişiklikleri value ya yollayacağız bir de value nun ne olduğunu belirleyeceğiz (event lisener gibi ama sadece değişiklik olduğunda dinler) */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input onChange={(e) => setProductName(e.target.value)} value={productName} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            {/* boostrap input divi */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                <input onChange={(e) => setProductPrice(e.target.value)} value={productPrice} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            {/* boostrap input divi */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                <input onChange={(e) => setProductDescription(e.target.value)} value={productDescription} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            {/*--2-- ürün ekleme butonu */}
            <button onClick={addProduct} type="button" className="btn btn-outline-success">
                Add
            </button>

            <h2>Product List</h2>
            {productList.map((product, index) => (
                <div key={index} className='bordered'>
                    {product.Name}
                    {product.Price}
                    {product.Description}
                </div>
            ))}
        </div>
    );
}

export default Products 
