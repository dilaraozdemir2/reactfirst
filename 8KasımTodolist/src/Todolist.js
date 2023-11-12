//rfce yazınca temel kod yapısı geliyor
//daha sonradan useState yazıp enter a basınca yukarıda yine usestate i ayrıca kullanacağını belirliyorsun

import React, { useState } from 'react'

function ToDoList() {

    const [toDoList, setToDoList] = useState([])
    //usestate hem başlangış değerinşi hem de güncelemeyei sağlar
    //todolist bizim değişkenimiz, settodolist ise todolistte ne olacağını belirleyen bir fonksiyon
    const [input, setInput] = useState('')
    //todolist in her bir maddesi. getelemenbyıd.value falan yapmak yerine bunu yazdık

    const addTodo = () => {
        if (input) {
            setToDoList([...toDoList, input])
            setInput("")
        }
        //eğer input umuz varsa settodolist fonksiyonunu kullanarak todolisti al ve sonuna inputu ekle 
        //setinput satırında da inputun içerisini boşalttık
    }

    return (
        <div>
            <h1>Product List</h1>
            <div className='to-do-inputs'>
                <input onChange={(e) => setInput(e.target.value)} value={input} className='bordered' placeholder='Enter new task.' type="text" />
                <div onClick={addTodo} className="btn btn-primary">Enter</div>
            </div>
            {/* bir değişiklik olduğu zaman elemanı (e) al  setinput fonksiyonundaki hedeflenen değere al ve inputu değere ver */}
            {/* butona tıklandığı zaman addtodo fonksiyonunu çalıştır */}

            <div>
                {

                    // todolist.map((item)=>function)
                    // for(i=0;i<todolist.length(),i++)
                    // listeyi yazdırıyoruz
                    toDoList ? toDoList.map((item, index) => (
                        <div key={index} className='bordered'>
                            {item}
                        </div>
                        //eğer todolist in içerisinde bir şey varsa bir döngü kullanacağız 
                        //bu dögünün parametreleri item ve index=> map döngüsünü kullanınca react bizden key istiyor 
                        //input iki kere aynı şeyi yazabileceğimiz için her değere farklı şeyler yazabileceğimiz bir key belirledik
                        //react kısmı html buraya yazdığın şeyler ekranda todolit i görmeni sağlar her bir item ı todolist e eklitoruz indexie bakarak
                    )) : '' //todolist dolu değilse boş bırak
                }
            </div>
            
        </div>
    )
}
export default ToDoList


