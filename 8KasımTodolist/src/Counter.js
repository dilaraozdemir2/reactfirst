import React, { useState } from "react";

function Counter() {
    const [sayi, setsayi] = useState(0)
    // useState ile başlangıçta ne olacağını belirliyoruz, bu react ta olan bir yapı ve kullanmak için öncesinde burada tanımladık yazıp enterlayınca yukarıda import etti
    //  sayi değerini setsayi ile değiştiriyoruz 
    const arttırma1 = () => {
        setsayi(sayi + 2);
        //değeri belli olan bir fonksiyon ok kullanılıyor diye adı arrow function önemli değil
    }

    function arttırma() {
        if (sayi < 10) {
            setsayi(sayi + 1);
            //setsayi da aslında bir fonksiyon
        }
    }
    function azaltma() {
        if (sayi > 0) {
            setsayi(sayi - 1);
        }
    }


    return (
        <div>
            <h1>Counter</h1>
            <div>
                <button onClick={arttırma}>Arttır</button>
                <p>{sayi}</p>
                <button onClick={azaltma}>Azalt</button>
            </div>
        </div>
    );
}

export default Counter;
