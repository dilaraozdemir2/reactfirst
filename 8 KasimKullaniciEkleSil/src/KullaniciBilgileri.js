    import React, { useState } from 'react'

    const KullaniciBilgileri = () => {
        const [ad, SetAD] = useState();//bu halde null bırakır
        const [soyad, SetSoyad] = useState();
        const [userList, SetUserList] = useState([]);

        const addUser = () => {
            const newUser = {
                newName: ad,
                newSurname: soyad,
            }

            SetUserList([...userList, newUser]);

            SetAD("");
            SetSoyad("")
        }

        const deleteUser = (index) => {
            const newList =[...userList];
            newList.splice(index,1)
            SetUserList(newList)
            }
        



        return (
            <div className='row'>
                <div className="mx-auto col-md-4">
                    <h2 style={{ margin: '30px' }}>Kullanıcı Ekle</h2>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Yeni Kullanıcı</span>
                        </div>
                        <input onChange={(e) => { SetAD(e.target.value) }} value={ad} type="text" aria-label="First name" className="form-control" placeholder='Ad' />
                        <input onChange={(e) => { SetSoyad(e.target.value) }} value={soyad} type="text" aria-label="Last name" className="form-control" placeholder='Soyad' />
                    </div>
                    <button onClick={addUser} type="button" className="btn btn-success" style={{ marginTop: '20px', marginBottom: '30px' }}>
                        Ekle
                    </button>

                    <div>
                        <h3 style={{ margin: '30px' }}>Kullanıcı Listesi</h3>
                        {
                            userList.map((user, index) => (
                                <div key={index} style={{margin:'20px'}}>
                                    {user.newName} {user.newSurname} 
                                    {user.newName && (
                                    <button onClick={deleteUser} type="button" className="btn btn-danger">Sil</button>
                                     )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        );

    }

    export default KullaniciBilgileri
