import React, { useState } from 'react';

function Products() {
    const [productList, setProductList] = useState([]);
    //alttakiler aslında yeni ekleyeceğim ürün için hazırladığım inputlar ve o yeniürünütemsil ediyorlar
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [ID, setID] = useState(0);
    const [editID, setEditId] =useState(0)//edit kısmında silmeden farklı olarak tek değil iki işlme var ve bu editID yi güncellede de kullanacağımız için burada değişken olarak atıyoruz
    const [mode, setMode] = useState("add")

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

    const deleteProduct = (ID) => {//parametrem ID
        setProductList(productList.filter((product) => (product.ID != ID)))
    }

    //edit kısmında bilgileri inputtan alıp useState e kaydediyoruz 
    const editProduct = (product) => { // parametrem product        //senin çalışmana sebep olan product ı al ve içeriğini düzenle
        setProductName(product.Name);//buradaki name değişken değil productobjesinin içindeki bir özellik
        setProductPrice(product.Price);
        setProductDescription(product.Description);
        setEditId(product.editID);
        setMode("edit");
    }

    //update ile backgrounddkileri yazdırıyoruz
    const updateProduct = () => {
        const newList = productList.map((product) => {
            return product.ID === editID ? {ID:editID, Name:productName, Price:productPrice} : product;
            //yeni bir liste oluşturmak için var olan listeyi döngüye aldık her bir ürünü kontrol ediyorum eğer editID ye sehipse işlemini yap değilse olduğu gibi listeye ekle
        });
        setProductList(newList);
        setProductName("");
        setProductPrice("");
        //editıd arka planda çalışıyor ekrana yazdırılmıyor ama arka planı da temizlemen lazım bir sonraki işlem için bu ıd yi tekrar kullanmasın diye
        setEditId("");
        setMode("update");
    }


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



            {mode === "add" ? (
                <button onClick={addProduct} type="button" className="btn btn-outline-success">
                    Add
                </button>

            ) : (
                <button type="button" className="btn btn-outline-warning">
                    Update
                </button>
            )}


            {/* --5-- listemi döngü ile ekrana yazdıracağım kısmı yapıyorum burayı tüm divlerin başına yapraydım inputlarım her ürün eklendiğinde sayfanın en altına kayardı o üstte sabit kalın diye buraya yapıyorum */}
            <h2>Product List</h2>
            {productList.map((product, index) => (
                <div key={index} className='bordered'>
                    {product.Name}
                    {product.Price}
                    {product.Description}
                    <button type="button" className="btn btn-outline-primary"//tıkladığım ürünün ID sini fonksiyona yolla
                        onClick={() => deleteProduct(product.ID)} >
                        Delete
                    </button>
                    <button type="button" className="btn btn-outline-danger"//tıklandığın porduct ı al editfonksiyonuna gönder
                        onClick={() => editProduct(product)} >
                        Edit
                    </button>
                </div>
            ))}


        </div>
    );
}

export default Products;
